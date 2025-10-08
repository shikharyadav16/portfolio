const transporter = require("../config/mailConfig");
require("dotenv").config();

async function sendMail({ name, email, subject, message }) {
  const mailOptions = {
    from: process.env.MAILER_USER,
    to: "yadavshikhar49@gmail.com",
    subject: subject,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 500px;">
            <div style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0;">📩 New Message!</h1>
                <p style="opacity: 0.9;">You've received a new contact form submission</p>
            </div>
            
            <div style="padding: 25px; background: white; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <div >
                        ⭐
                    </div>
                    <div>
                        <strong style="display: block; color: #1f2937;">${name}</strong>
                        <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
                    </div>
                </div>

                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #374151;">Message:</h3>
                    <p style="line-height: 1.6; color: #4b5563; margin: 0;">${message}</p>
                </div>
            </div>

            <div style="text-align: center; padding: 20px; background: #f1f5f9; border-radius: 0 0 10px 10px; font-size: 12px; color: #64748b;">
                Sent on ${new Date().toLocaleString()} • Portfolio Contact Form
            </div>
        </div>
    `
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
