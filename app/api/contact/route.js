import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, address, number, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div class="header" style="background-color: #00502A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; color: white; ">New Contact Form Submission</h1>
        <p style="margin: 0; color: white; ">${new Date().toLocaleDateString()}</p>
      </div>
      <div class="content" style="background-color: #f9fafb; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
        <div class="field" style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div class="label" style="font-weight: bold; color: #00502A; display: block; margin-bottom: 5px;">Subject</div>
          <div class="value" style="padding-left: 10px;">${subject}</div>
        </div>
        <div class="field" style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div class="label" style="font-weight: bold; color: #00502A; display: block; margin-bottom: 5px;">Name</div>
          <div class="value" style="padding-left: 10px;">${name}</div>
        </div>
        <div class="field" style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div class="label" style="font-weight: bold; color: #00502A; display: block; margin-bottom: 5px;">Address</div>
          <div class="value" style="padding-left: 10px;">${address}</div>
        </div>
        <div class="field" style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <div class="label" style="font-weight: bold; color: #00502A; display: block; margin-bottom: 5px;">Phone</div>
          <div class="value" style="padding-left: 10px;">${number}</div>
        </div>
        <div class="field" style="margin-bottom: 15px; padding-bottom: 15px;">
          <div class="label" style="font-weight: bold; color: #00502A; display: block; margin-bottom: 5px;">Message</div>
          <div class="value message-box" style="background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; margin-top: 5px;">${message.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
      <div class="footer" style="text-align: center; font-size: 0.8rem; color: #6b7280; margin-top: 20px;">
        <p style="margin: 0;">This is an automated message from the SMI.ca contact form.</p>
      </div>
    </body>
    </html>
  `;

  // Email content
  const mailOptions = {
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: `New Contact Form: ${subject}`,
    text: `
      Name: ${name}
      Address: ${address}
      Phone: ${number}
      Subject: ${subject}
      Message: ${message}
    `, 
    html: htmlEmail,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}