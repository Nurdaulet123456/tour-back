const Referral = require("../models/referral").Referral
const User = require("../models/user").User

module.exports = {
  checkReferer: async (query) => {
    try {
      const referral = await Referral.findOne(query)
      console.log(referral)
      if (!referral) {
        throw new Error("Invalid Referral")
      }
      return referral.userId
    } catch (err) {
      throw new Error(err)
    }
  },
}
