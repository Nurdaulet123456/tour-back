const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  parentId: {
    type: Schema.Types.ObjectId,
  },
  refParent: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = { User: mongoose.model("user", UserSchema) }
