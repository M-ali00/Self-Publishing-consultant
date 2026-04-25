const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ma1969974@gmail.com",
        pass: "saec nbea kprw ealw",
    },
});

const mailOptions = {
    from: '"Self-Publishing Consultant" <ma1969974@gmail.com>',
    to: "ma1969974@gmail.com",
    subject: "Test Email from Script",
    text: "This is a test email to verify form submission credentials.",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Email send error:", error);
    } else {
        console.log("Email sent successfully:", info.response);
    }
});
