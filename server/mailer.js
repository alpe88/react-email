const nodemailer = require("nodemailer");
const {
  HOST,
  PORT,
  AUTH_USER,
  AUTH_PASSWORD,
  FROM,
  TO,
} = require("./constants");

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: AUTH_USER,
    pass: AUTH_PASSWORD,
  },
});

async function sendEmail({ msg, subject }) {
  const options = {
    from: FROM,
    to: TO,
    subject,
    html: msg,
  };

  await transporter.sendMail(options);
}

module.exports = { sendEmail };
