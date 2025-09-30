const { sendMail } = require('../services/mailService')

async function handleSendEmail(req, res) {
    const { name, email, subject, message } = req.body;

    try {
        const response = await sendMail({ name, email, subject, message });

        if (response?.accepted && response.accepted.length > 0) {
            return res.status(200).json({ success: true, message: "Message sent successfully" });
        } else {
            return res.status(403).json({ success: false, message: "Message not sent" });
        }

    } catch (err) {
        console.log("Error:", err)
        return res.status(500).json({ success: false, message: "Intenral server error" });
    }
}

module.exports = { handleSendEmail }