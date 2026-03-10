const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
};

// @route   POST /api/contact
// @desc    Handle contact form submissions
// @access  Public
router.post('/contact', async (req, res) => {
  try {
    const transporter = createTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (transporter && from) {
      const text = Object.entries(req.body)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

      await transporter.sendMail({
        from,
        to: 'oriasusaofficial@gmail.com',
        subject: 'ORIA Contact Submission',
        text,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// @route   POST /api/intake
// @desc    Handle intake form submissions (Funding/Credit/Merchant)
// @access  Public
router.post('/intake', upload.any(), async (req, res) => {
  try {
    const transporter = createTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const type = req.body.type || 'intake';
    const files = req.files || [];

    if (transporter && from) {
      const text = Object.entries(req.body)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

      await transporter.sendMail({
        from,
        to: 'oriasusaofficial@gmail.com',
        subject: `ORIA ${type} Submission`,
        text,
        attachments: files.map((file) => ({
          filename: file.originalname,
          content: file.buffer,
        })),
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
