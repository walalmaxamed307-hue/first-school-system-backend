const express = require('express')
const { login, studentLogin, me } = require('../controllers/authController')
const { authenticateSession } = require('../middleware/auth')
const asyncHandler = require('../middleware/asyncHandler')
const { loginLimiter } = require('../middleware/security')

const router = express.Router()

router.post('/login', loginLimiter, asyncHandler(login))
router.post('/student-login', loginLimiter, asyncHandler(studentLogin))
router.get('/me', authenticateSession, asyncHandler(me))

module.exports = router
