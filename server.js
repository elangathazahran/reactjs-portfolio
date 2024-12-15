const express = require('express');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inisialisasi Resend API key
const resend = new Resend(process.env.RESEND_API_KEY);

// API Endpoint untuk mengirim email
app.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    // Validasi input
    if (!to || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // Mengirim email menggunakan Resend API
        const response = await resend.emails.send({
            from: 'athazahrane@gmail.com',
            to,                             
            subject,                        
            html: message                   
        });

        // Mengirimkan response sukses
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error(error);
        // Mengirimkan response error jika terjadi masalah
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
