const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();



const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const port = 4000;
app.listen(port, () => console.log(`Server Running on port ${port}`));




const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify(error => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    const mail = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfollio",
        html: `<p>Name: ${name}</p>
              <p>Name: ${email}</p>
              <p>Name: ${phone}</p>
              <p>Name: ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});