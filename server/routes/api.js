const express = require('express');
const router = express.Router();

// @route   POST /api/contact
// @desc    Handle contact form submissions
// @access  Public
router.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  // Here you would integrate with a CRM or email service
  console.log('Contact Form Submission:', req.body);
  
  res.status(200).json({ success: true, message: 'Message received successfully' });
});

// @route   POST /api/intake
// @desc    Handle intake form submissions (Funding/Credit/Merchant)
// @access  Public
router.post('/intake', (req, res) => {
  const { type, firstName, lastName, email, phone, companyName, message } = req.body;
  
  // Here you would integrate with a CRM or email service
  console.log(`Intake Form Submission (${type}):`, req.body);
  
  res.status(200).json({ success: true, message: 'Intake received successfully' });
});

module.exports = router;
