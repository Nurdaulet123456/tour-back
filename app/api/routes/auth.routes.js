const express = require("express")
const router = express.Router()
const { registerUser, loginUser } = require("../controllers/auth/auth")
const { forgetPassword } = require('../controllers/auth/forgetPassword')

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post('/forgetPassword/:id', forgetPassword)

module.exports = router
