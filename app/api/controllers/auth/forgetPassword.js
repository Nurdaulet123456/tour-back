const { User } = require("../../../models/user")
const hashPassword = require("../../utils/hashPassword")
const generateResponse = require("../../utils/utils")

const forgetPassword = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})

        if (!user) {
            return generateResponse(res, 404, "User not found")
        }

        if (req.body.email === user.email) {
            return generateResponse(res, 404, "Email already in use")
        }

        req.body.password = await hashPassword(req.body.password)

        user.password = req.body.password
        user.email = req.body.email

        await user.save()
        return res
        .status(201)
        .json({ message: "success", user: user })
    } catch (error) {
        console.log(error)
        return generateResponse(res, 500, error.message)
    }   
}  


module.exports = { forgetPassword }
