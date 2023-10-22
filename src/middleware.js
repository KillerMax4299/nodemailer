const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Or use your email provider's SMTP settings
  host: "smtp.gmail.com", //
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Define the email data

// Send the email

async function sendemail({ name, email, phone, message }) {
  const mailOptions = {
    from: {
      name: "Markall",
      address: "thekillermax1999@gmail.com",
    },
    to: process.env.EMAIL,
    subject: "Contacting from website",
    text: `Name : ${name} \nEmail : ${email} \nPhone : ${phone} \nMessage : ${message}`,
  };
  return transportMail(mailOptions);
}

async function transportMail(mailOptions) {
  const res = await transporter.sendMail(mailOptions);
  return res.messageId;
}

module.exports = { sendemail };
