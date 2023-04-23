const express = require("express")
const router = express.Router()
const { registerUser, loginUser } = require("../controllers/auth/auth")
const { forgetPassword } = require('../controllers/forgetPassword/forgetPassword')
const {getUserChild} = require('../controllers/getRequest/getChildUser')

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post('/forgetPassword/:id', forgetPassword)
router.post('/child/:id', getUserChild)

module.exports = router
