const { sendEmail } = require("./server/mailer");

try {
  await sendEmail();
} catch (e) {
  console.log({ e });
}
