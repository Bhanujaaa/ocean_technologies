const express = require('express');
const { sendMail } = require('../controller/user');
const router = new express.Router();
router.post('/sendMail',sendMail)

router.post('/api/contact', (req, res) => {
    const { name, email, mobile, query } = req.body;

    // Perform server-side validation if necessary
    if (!name || !email || !mobile || !query) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Logic to handle form submission, e.g., save to database, send email, etc.
    // For demonstration, we'll just log the data and send a success response
    console.log('Contact Form Submission:', { name, email, mobile, query });

    // Send a success response
    res.status(200).json({ message: 'Message sent successfully!' });
});
module.exports = router;