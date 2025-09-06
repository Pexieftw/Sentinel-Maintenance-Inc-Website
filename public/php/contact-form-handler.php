<?php
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/contact_form_errors.log');
error_reporting(E_ALL);

// Set JSON header early
header("Content-Type: application/json");

// Function to safely log errors
function logError($message) {
    error_log('[' . date('Y-m-d H:i:s') . '] ' . $message);
}

// Function to send JSON response and exit
function sendResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}

try {
    // Check if config file exists
    $configFile = __DIR__ . '/config.php';
    if (!file_exists($configFile)) {
        logError("Config file not found: $configFile");
        sendResponse(['error' => 'Configuration file not found'], 500);
    }

    // Load configuration
    require_once $configFile;

    // Enable CORS for your domain
    $allowed_origins = [
        'https://smi.ca',
        'https://www.smi.ca',
        'http://localhost:3000'
    ];

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
    }

    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept");

    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        sendResponse(['message' => 'CORS preflight successful']);
    }

    // Only allow POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        sendResponse(['error' => 'Method not allowed'], 405);
    }

    // Get the JSON input
    $input = file_get_contents('php://input');
    
    if (empty($input)) {
        sendResponse(['error' => 'No input data received'], 400);
    }
    
    // Log the input for debugging
    logError("Received input: " . $input);
    
    $data = json_decode($input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        logError('JSON decode error: ' . json_last_error_msg());
        sendResponse(['error' => 'Invalid JSON: ' . json_last_error_msg()], 400);
    }
    
    // Validate required fields
    $required_fields = ['name', 'address', 'email', 'subject', 'message'];
    $errors = [];

    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            $errors[] = "Field '$field' is required";
        }
    }

    if (!empty($errors)) {
        sendResponse(['error' => 'Validation failed', 'details' => $errors], 400);
    }

    // Sanitize input data
    $name = htmlspecialchars(trim($data['name']));
    $address = htmlspecialchars(trim($data['address']));
    $email = htmlspecialchars(trim($data['email']));
    $subject = htmlspecialchars(trim($data['subject']));
    $message = htmlspecialchars(trim($data['message']));

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendResponse(['error' => 'Invalid email address format'], 400);
    }

    // Validate email configuration
    if (!defined('EMAIL_HOST') || !defined('EMAIL_USER') || !defined('EMAIL_PASSWORD')) {
        logError('Email configuration constants not defined');
        sendResponse(['error' => 'Email configuration error'], 500);
    }

    // Get email recipients
    $recipients = getEmailRecipients();
    if (empty($recipients)) {
        logError('No valid email recipients configured');
        sendResponse(['error' => 'No email recipients configured'], 500);
    }

    logError("Sending to recipients: " . implode(', ', $recipients));

    // Get SMTP configuration
    $smtp_configs = getSMTPConfigs();
    if (empty($smtp_configs)) {
        logError('No SMTP configurations available');
        sendResponse(['error' => 'Email service unavailable'], 500);
    }

    // Create email content
    $htmlEmail = createHTMLEmail($name, $address, $email, $subject, $message);
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = createPlainTextEmail($name, $address, $email, $subject, $message);

    // Try to send email to all recipients
    $emailSent = false;
    $emailError = null;
    $successfulRecipients = [];
    $failedRecipients = [];
    
    foreach ($smtp_configs as $config) {
        try {
            logError("Trying SMTP: " . $config['host'] . ":" . $config['port']);
            
            $result = sendSMTPEmailToMultiple(
                $config['host'], 
                $config['port'], 
                $config['username'], 
                $config['password'], 
                EMAIL_FROM, 
                $recipients, 
                $email_subject, 
                $email_body, 
                $htmlEmail, 
                $config['secure']
            );
            
            if ($result['success']) {
                logError("Email sent successfully using " . $config['host'] . " to: " . implode(', ', $result['successful']));
                $emailSent = true;
                $successfulRecipients = array_merge($successfulRecipients, $result['successful']);
                $failedRecipients = array_merge($failedRecipients, $result['failed']);
                break;
            } else {
                $emailError = $result['error'];
                logError("SMTP failed (" . $config['host'] . "): " . $emailError);
            }
        } catch (Exception $e) {
            $emailError = $e->getMessage();
            logError("SMTP failed (" . $config['host'] . "): " . $emailError);
            continue;
        }
    }
    
    // If SMTP failed, try PHP mail() function
    if (!$emailSent && defined('ENABLE_FALLBACK_MAIL') && ENABLE_FALLBACK_MAIL) {
        try {
            logError("Trying fallback mail() function");
            foreach ($recipients as $recipient) {
                $mailSent = sendFallbackEmail($recipient, $email_subject, $email_body, $htmlEmail, EMAIL_FROM);
                if ($mailSent) {
                    $successfulRecipients[] = $recipient;
                    $emailSent = true;
                } else {
                    $failedRecipients[] = $recipient;
                }
            }
            if ($emailSent) {
                logError("Email sent using fallback mail() to: " . implode(', ', $successfulRecipients));
            }
        } catch (Exception $e) {
            $emailError = $e->getMessage();
            logError("Fallback mail() failed: " . $emailError);
        }
    }
    
    // Return success response
    $responseData = [
        'success' => true, 
        'message' => $emailSent ? 'Form submitted and email sent successfully' : 'Form submitted successfully (email delivery pending)',
        'data' => [
            'name' => $name,
            'subject' => $subject,
            'timestamp' => date('Y-m-d H:i:s'),
            'email_sent' => $emailSent,
            'recipients_count' => count($recipients),
            'successful_recipients' => count($successfulRecipients),
            'failed_recipients' => count($failedRecipients)
        ]
    ];

    if (DEBUG_MODE) {
        $responseData['debug'] = [
            'successful_recipients' => $successfulRecipients,
            'failed_recipients' => $failedRecipients,
            'total_recipients' => $recipients
        ];
    }

    sendResponse($responseData);

} catch (Exception $e) {
    logError("Fatal error: " . $e->getMessage() . " in " . $e->getFile() . " line " . $e->getLine());
    sendResponse(['error' => 'Internal server error'], 500);
} catch (Error $e) {
    logError("PHP Error: " . $e->getMessage() . " in " . $e->getFile() . " line " . $e->getLine());
    sendResponse(['error' => 'Internal server error'], 500);
}

// Function to create modern HTML email template
function createHTMLEmail($name, $address, $email, $subject, $message) {
    $timestamp = date('F j, Y \a\t g:i A');
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    
    return '
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - SMI</title>
      <style>
        .container { max-width: full; margin: 0 auto; font-family: "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, sans-serif; }
        .header { background: linear-gradient(135deg, #00502A 0%, #006B37 100%); color: white; padding: 30px 25px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 15px rgba(0,80,42,0.2); }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; color: white; }
        .header .subtitle { margin: 8px 0 0 0; opacity: 0.9; font-size: 14px; color: white; }
        .content { background: #ffffff; padding: 0; border-radius: 0 0 12px 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); overflow: hidden; }
        .priority-section { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-bottom: 2px solid #e2e8f0; }
        .priority-title { color: #00502A; font-size: 18px; font-weight: 700; margin: 0 0 15px 0; display: flex; align-items: center; }
        .priority-content { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .priority-item { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #00502A; box-shadow: 0 2px 8px rgba(0,80,42,0.1); }
        .priority-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 600; }
        .priority-value { color: #334155; font-weight: 600; font-size: 14px; }
        .details-section { padding: 25px; }
        .section-title { color: #00502A; font-size: 16px; font-weight: 700; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
        .field-group { margin-bottom: 25px; }
        .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-bottom: 15px; transition: all 0.3s ease; }
        .field:hover { box-shadow: 0 4px 12px rgba(0,80,42,0.08); }
        .field-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; font-weight: 600; }
        .field-value { color: #1e293b; font-size: 15px; font-weight: 500; line-height: 1.5; }
        .message-field { background: white; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; }
        .message-field .field-value { line-height: 1.6; color: #334155; }
        .metadata-section { background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 20px 25px; border-top: 1px solid #e2e8f0; }
        .metadata-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .metadata-item { background: rgba(255,255,255,0.7); padding: 12px 15px; border-radius: 6px; border: 1px solid rgba(0,80,42,0.1); }
        .metadata-label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 600; }
        .metadata-value { font-size: 12px; color: #475569; font-weight: 500; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
        .footer a { color: #00502A; text-decoration: none; font-weight: 600; }
        .badge { display: inline-block; background: #00502A; color: white; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 10px; }
      </style>
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f8fafc;">
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p class="subtitle">SMI Customer Inquiry System</p>
        </div>
        
        <div class="content">
          <div class="priority-section">
            <div class="priority-title">
              Priority Information
              <span class="badge">New</span>
            </div>
            <div class="priority-content">
              <div class="priority-item">
                <div class="priority-label">Subject</div>
                <div class="priority-value">' . htmlspecialchars($subject) . '</div>
              </div>
              <div class="priority-item">
                <div class="priority-label">Customer Name</div>
                <div class="priority-value">' . htmlspecialchars($name) . '</div>
              </div>
            </div>
          </div>

          <div class="details-section">
            <div class="section-title">Contact Details</div>
            <div class="field-group">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">' . htmlspecialchars($name) . '</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #00502A; text-decoration: none;">' . htmlspecialchars($email) . '</a></div>
              </div>
              <div class="field">
                <div class="field-label">Address</div>
                <div class="field-value">' . htmlspecialchars($address) . '</div>
              </div>
            </div>

            <div class="section-title">Message</div>
            <div class="message-field">
              <div class="field-label">Customer Message</div>
              <div class="field-value">' . nl2br(htmlspecialchars($message)) . '</div>
            </div>
          </div>

          <div class="metadata-section">
            <div class="metadata-grid">
              <div class="metadata-item">
                <div class="metadata-label">Submission Time</div>
                <div class="metadata-value">' . $timestamp . '</div>
              </div>
              <div class="metadata-item">
                <div class="metadata-label">Form Source</div>
                <div class="metadata-value">SMI.ca Contact Page</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent via the contact form on <a href="https://smi.ca">SMI.ca</a></p>
          <p>Automated notification system - Please do not reply to this email</p>
        </div>
      </div>
    </body>
    </html>
    ';
}

// Function to create plain text email
function createPlainTextEmail($name, $address, $email, $subject, $message) {
    $timestamp = date('F j, Y \a\t g:i A');
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    
    $email_body = "=================================\n";
    $email_body .= "NEW CONTACT FORM SUBMISSION\n";
    $email_body .= "SMI Customer Inquiry System\n";
    $email_body .= "=================================\n\n";
    
    $email_body .= "PRIORITY INFORMATION:\n";
    $email_body .= "Subject: " . $subject . "\n";
    $email_body .= "Customer: " . $name . "\n\n";
    
    $email_body .= "CONTACT DETAILS:\n";
    $email_body .= "---------------------------------\n";
    $email_body .= "Full Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Address: " . $address . "\n\n";
    
    $email_body .= "MESSAGE:\n";
    $email_body .= "---------------------------------\n";
    $email_body .= $message . "\n\n";
    
    $email_body .= "SUBMISSION DETAILS:\n";
    $email_body .= "---------------------------------\n";
    $email_body .= "Submitted: " . $timestamp . "\n";
    $email_body .= "Source: SMI.ca Contact Page\n\n";
    
    $email_body .= "=================================\n";
    $email_body .= "This message was sent via SMI.ca contact form\n";
    $email_body .= "Automated notification - Do not reply\n";
    $email_body .= "=================================";
    
    return $email_body;
}

// NEW: SMTP function that handles multiple recipients
function sendSMTPEmailToMultiple($host, $port, $username, $password, $from, $recipients, $subject, $textBody, $htmlBody, $secure = 'tls') {
    $socket = null;
    $successful = [];
    $failed = [];
    
    try {
        // Check if OpenSSL is available for SSL/TLS
        if (($secure === 'ssl' || $secure === 'tls') && !extension_loaded('openssl')) {
            throw new Exception("OpenSSL extension not loaded - cannot use SSL/TLS");
        }
        
        // Create socket connection
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
                'allow_self_signed' => false,
                'peer_name' => $host,
                'crypto_method' => STREAM_CRYPTO_METHOD_TLS_CLIENT
            ]
        ]);
        
        $connectionString = "";
        switch ($secure) {
            case 'ssl':
                $connectionString = "ssl://$host:$port";
                break;
            case 'tls':
                $connectionString = "tcp://$host:$port";
                break;
            case 'none':
                $connectionString = "tcp://$host:$port";
                break;
            default:
                throw new Exception("Unsupported security type: $secure");
        }
        
        $socket = stream_socket_client($connectionString, $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $context);
        
        if (!$socket) {
            throw new Exception("Failed to connect to $connectionString: $errstr ($errno)");
        }
        
        // SMTP conversation helper
        $readResponse = function($expectedCode = null) use ($socket) {
            $response = fgets($socket, 515);
            if ($response === false) {
                throw new Exception("Failed to read SMTP response");
            }
            
            $code = substr($response, 0, 3);
            while (substr($response, 3, 1) == '-') {
                $line = fgets($socket, 515);
                if ($line === false) break;
                $response = $line;
            }
            
            if ($expectedCode && $code != $expectedCode) {
                throw new Exception("SMTP Error: Expected $expectedCode, got $code - $response");
            }
            
            return $response;
        };
        
        // Start SMTP conversation
        $readResponse('220');
        
        fwrite($socket, "EHLO smi.ca\r\n");
        $readResponse('250');
        
        // Handle STARTTLS for TLS connections
        if ($secure === 'tls') {
            fwrite($socket, "STARTTLS\r\n");
            $readResponse('220');
            
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new Exception("Failed to enable TLS encryption");
            }
            
            fwrite($socket, "EHLO smi.ca\r\n");
            $readResponse('250');
        }
        
        // Authentication
        fwrite($socket, "AUTH LOGIN\r\n");
        $readResponse('334');
        
        fwrite($socket, base64_encode($username) . "\r\n");
        $readResponse('334');
        
        fwrite($socket, base64_encode($password) . "\r\n");
        $readResponse('235');
        
        // Send email to multiple recipients
        fwrite($socket, "MAIL FROM: <$from>\r\n");
        $readResponse('250');
        
        // Add all recipients
        foreach ($recipients as $recipient) {
            try {
                fwrite($socket, "RCPT TO: <$recipient>\r\n");
                $response = $readResponse('250');
                $successful[] = $recipient;
            } catch (Exception $e) {
                logError("Failed to add recipient $recipient: " . $e->getMessage());
                $failed[] = $recipient;
            }
        }
        
        // If no recipients were successful, throw an error
        if (empty($successful)) {
            throw new Exception("No valid recipients could be added");
        }
        
        fwrite($socket, "DATA\r\n");
        $readResponse('354');
        
        // Create multipart email
        $boundary = "boundary_" . md5(uniqid());
        
        $email_data = "From: " . EMAIL_FROM_NAME . " <$from>\r\n";
        $email_data .= "To: " . implode(', ', $successful) . "\r\n"; // Show all recipients in To field
        $email_data .= "Subject: $subject\r\n";
        $email_data .= "Date: " . date('r') . "\r\n";
        $email_data .= "MIME-Version: 1.0\r\n";
        $email_data .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
        $email_data .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $email_data .= "\r\n";
        
        $email_data .= "--$boundary\r\n";
        $email_data .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $email_data .= "Content-Transfer-Encoding: 8bit\r\n";
        $email_data .= "\r\n";
        $email_data .= $textBody . "\r\n";
        
        $email_data .= "--$boundary\r\n";
        $email_data .= "Content-Type: text/html; charset=UTF-8\r\n";
        $email_data .= "Content-Transfer-Encoding: 8bit\r\n";
        $email_data .= "\r\n";
        $email_data .= $htmlBody . "\r\n";
        
        $email_data .= "--$boundary--\r\n";
        $email_data .= "\r\n.\r\n";
        
        fwrite($socket, $email_data);
        $readResponse('250');
        
        fwrite($socket, "QUIT\r\n");
        fclose($socket);
        
        return [
            'success' => !empty($successful),
            'successful' => $successful,
            'failed' => $failed,
            'error' => null
        ];
        
    } catch (Exception $e) {
        if ($socket && is_resource($socket)) {
            fclose($socket);
        }
        return [
            'success' => false,
            'successful' => $successful,
            'failed' => array_merge($failed, array_diff($recipients, $successful)),
            'error' => $e->getMessage()
        ];
    }
}

// Fallback email function
function sendFallbackEmail($to, $subject, $textBody, $htmlBody, $from) {
    $boundary = "boundary_" . md5(uniqid());
    
    $headers = "From: " . EMAIL_FROM_NAME . " <$from>\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n";
    $body .= "\r\n";
    $body .= $textBody . "\r\n";
    
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n";
    $body .= "\r\n";
    $body .= $htmlBody . "\r\n";
    
    $body .= "--$boundary--";
    
    return mail($to, $subject, $body, $headers, "-f $from");
}
?>