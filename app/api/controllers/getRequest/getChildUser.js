const { User } = require("../../../models/user")
// const { Referral } = require("../../../models/referral")

const getUserChild = async (req, res) => {
  try {
    const user = await User.find({parentId: req.params.id})

    if (!user) {
        return res.status(400).send({message: "Bad request"})
    }   

    if (req.params.id === user) {
        return res.status(201).send({user: user, message: "Successfully"})
    }
    
    return res.status(201).send({user: user, message: "Successfully"})
  } catch (err) {

  }
}


module.exports = { getUserChild }
