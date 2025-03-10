const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const EMAIL= process.env.EMAIL
const PASSWORD=process.env.PASSWORD

console.log(EMAIL,PASSWORD)
const sendMail = (req, res) => {

    const { name, emailu, mobile, query } = req.body;
    console.log(name, emailu, mobile, query)

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }  
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Ocean Technologies",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Admin",
            intro: `A query is received from ${emailu} through contact us page of the website whose mobile number is ${mobile}`,
            outro: `There query is <strong>${query}</strong>`,
        }
    }

    let mail = MailGenerator.generate(response)
const fromMail=`${emailu}<${EMAIL}>`
console.log(emailu,"emailuuu")
    let message = {
        from : fromMail,
        to : EMAIL,
        subject: "Query sent",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(200).json({
            msg: "you should receive query to the email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

}



module.exports = {
    sendMail,
}