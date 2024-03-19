import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./email";
import {
  HOST,
  PORT,
  AUTH_USER,
  AUTH_PASSWORD,
  FROM,
  TO,
  SUBJECT,
  EMAIL_TEXT,
} from "./constants";

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: true,
  auth: {
    user: AUTH_USER,
    pass: AUTH_PASSWORD,
  },
});

const msg = EMAIL_TEXT;

const emailHtml = render(Email({ msg }));

const options = {
  from: FROM,
  to: TO,
  subject: SUBJECT,
  html: emailHtml,
};

export async function sendEmail() {
  await transporter.sendMail(options);
}
