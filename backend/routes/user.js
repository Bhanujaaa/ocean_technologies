const express = require('express');
const { sendOtp, verifyOTP } = require('../controller/user');
const router = new express.Router();
router.post('/sendOTP',sendOtp)
router.post('/verifyOTP',verifyOTP)