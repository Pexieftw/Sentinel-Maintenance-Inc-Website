<?php

function logConfigError($message) {
    error_log('[' . date('Y-m-d H:i:s') . '] CONFIG: ' . $message);
}

function loadEnvFile($path) {
    if (!file_exists($path)) {
        return false;
    }
    
    try {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            return false;
        }
        
        foreach ($lines as $line) {
            if (strpos($line, '#') === 0) {
                continue; 
            }
            
            if (strpos($line, '=') !== false) {
                list($key, $value) = explode('=', $line, 2);
                $key = trim($key);
                $value = trim($value);
                
                if (preg_match('/^"(.*)"$/', $value, $matches)) {
                    $value = $matches[1];
                } elseif (preg_match("/^'(.*)'$/", $value, $matches)) {
                    $value = $matches[1];
                }
                
                if (!array_key_exists($key, $_ENV)) {
                    $_ENV[$key] = $value;
                    putenv("$key=$value");
                }
            }
        }
        return true;
    } catch (Exception $e) {
        logConfigError("Error loading env file $path: " . $e->getMessage());
        return false;
    }
}

$envPaths = [
    __DIR__ . '/.env.production',
];

$envLoaded = false;
foreach ($envPaths as $envPath) {
    if (loadEnvFile($envPath)) {
        logConfigError("Loaded environment file: $envPath");
        $envLoaded = true;
        break;
    }
}

if (!$envLoaded) {
    logConfigError("No environment file found. Searched paths: " . implode(', ', $envPaths));
}

function getEnvVar($key, $default = null) {
    $value = $_ENV[$key] ?? getenv($key);
    
    if ($value === null || $value === false) {
        return $default;
    }
    
    return $value;
}

define('EMAIL_HOST', getEnvVar('EMAIL_HOST', 'smtp.gmail.com'));
define('EMAIL_PORT', intval(getEnvVar('EMAIL_PORT', '587')));
define('EMAIL_SECURE', getEnvVar('EMAIL_SECURE', 'tls') === 'tls' ? 'tls' : (getEnvVar('EMAIL_SECURE', 'tls') === 'ssl' ? 'ssl' : false));
define('EMAIL_USER', getEnvVar('EMAIL_USER', 'SMI.cform@gmail.com'));
define('EMAIL_PASSWORD', getEnvVar('EMAIL_PASSWORD', ''));
define('EMAIL_FROM', getEnvVar('EMAIL_FROM', getEnvVar('EMAIL_USER', 'SMI.cform@gmail.com')));
define('EMAIL_FROM_NAME', getEnvVar('EMAIL_FROM_NAME', 'Sentinel Maintenance Inc'));
define('EMAIL_RECIPIENT_RAW', getEnvVar('EMAIL_RECIPIENT', 'info@smi.ca'));

define('DEBUG_MODE', getEnvVar('DEBUG_MODE', 'false') === 'true');
define('ENABLE_FALLBACK_MAIL', getEnvVar('ENABLE_FALLBACK_MAIL', 'true') === 'true');

function parseEmailRecipients($recipientString) {
    $recipients = [];
    $rawRecipients = explode(',', $recipientString);
    
    foreach ($rawRecipients as $recipient) {
        $recipient = trim($recipient);
        if (filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
            $recipients[] = $recipient;
        } else {
            logConfigError("Invalid email address skipped: $recipient");
        }
    }
    
    return $recipients;
}

define('EMAIL_RECIPIENTS', parseEmailRecipients(EMAIL_RECIPIENT_RAW));

if (empty(EMAIL_PASSWORD)) {
    logConfigError('CRITICAL: EMAIL_PASSWORD not set in environment variables');
}

if (empty(EMAIL_HOST)) {
    logConfigError('CRITICAL: EMAIL_HOST not set in environment variables');
}

if (empty(EMAIL_RECIPIENTS)) {
    logConfigError('CRITICAL: No valid EMAIL_RECIPIENTS found');
}

if (DEBUG_MODE || true) { 
    logConfigError("EMAIL_HOST: " . EMAIL_HOST);
    logConfigError("EMAIL_PORT: " . EMAIL_PORT);
    logConfigError("EMAIL_USER: " . EMAIL_USER);
    logConfigError("EMAIL_PASSWORD: " . (empty(EMAIL_PASSWORD) ? 'NOT SET' : 'SET (length: ' . strlen(EMAIL_PASSWORD) . ')'));
    logConfigError("EMAIL_RECIPIENT: " . EMAIL_RECIPIENT_RAW);
    logConfigError("EMAIL_RECIPIENTS (parsed): " . implode(', ', EMAIL_RECIPIENTS));
    logConfigError("EMAIL_SECURE: " . EMAIL_SECURE);
}

function getSMTPConfigs() {
    $configs = [];
    
    if (empty(EMAIL_HOST)) {
        logConfigError('ERROR: EMAIL_HOST is empty');
        return $configs;
    }
    
    if (empty(EMAIL_PASSWORD)) {
        logConfigError('ERROR: EMAIL_PASSWORD is empty');
        return $configs;
    }
    
    $sslSupported = extension_loaded('openssl');
    if (!$sslSupported) {
        logConfigError('WARNING: OpenSSL extension not loaded - SSL/TLS connections will fail');
        return $configs; 
    }
    
    // Gmail-specific configurations (remove the invalid mail.smtp.gmail.com)
    $configs[] = [
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'secure' => 'tls',
        'username' => EMAIL_USER,
        'password' => EMAIL_PASSWORD,
    ];
    
    // Backup Gmail config with SSL on 465
    $configs[] = [
        'host' => 'smtp.gmail.com',
        'port' => 465,
        'secure' => 'ssl',
        'username' => EMAIL_USER,
        'password' => EMAIL_PASSWORD,
    ];
    
    return $configs;
}

function getEmailRecipients() {
    return EMAIL_RECIPIENTS;
}

function validateConfig() {
    $required = [
        'EMAIL_HOST' => EMAIL_HOST,
        'EMAIL_USER' => EMAIL_USER,
        'EMAIL_PASSWORD' => EMAIL_PASSWORD,
    ];
    
    $missing = [];
    
    foreach ($required as $key => $value) {
        if (empty($value)) {
            $missing[] = $key;
        }
    }
    
    if (empty(EMAIL_RECIPIENTS)) {
        $missing[] = 'EMAIL_RECIPIENTS (no valid email addresses found)';
    }
    
    if (!empty($missing)) {
        $error = 'Missing required configuration: ' . implode(', ', $missing);
        logConfigError($error);
        return false;
    }
    
    return true;
}

$configValid = validateConfig();

logConfigError("Configuration validation: " . ($configValid ? 'PASSED' : 'FAILED'));

// Test if we can create a simple SMTP config
$testConfigs = getSMTPConfigs();
logConfigError("Generated " . count($testConfigs) . " SMTP configurations");

if (DEBUG_MODE && !empty($testConfigs)) {
    foreach ($testConfigs as $i => $config) {
        logConfigError("Config $i: " . $config['host'] . ":" . $config['port'] . " (" . $config['secure'] . ")");
    }
}
?>