const transporter = require('../config/mailConfig');
require('dotenv').config();

async function sendMail({ name, email, subject, message }) {
    const mailOptions = {
        from: process.env.MAILER_USER,
        to: "yadavshikhar49@gmail.com",
        subject: subject,
        text: `Name: ${name}, Email: ${email}\n
        Content: ${message}`
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendMail }