const express = require("express");
const { handleSendEmail } = require("../controllers/mailController");
const router = express.Router();

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .post("/send-mail", handleSendEmail);

module.exports = router;
