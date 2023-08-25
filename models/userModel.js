const { mongoose, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    firstName: {type: String, required: ture},
    lastName: {type: String, required: ture},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {default: 2, required: ture, type:Number},
})
userSchema.methods.hashPassword = async function () {
   this.password = await bcrypt.hash(this.password, 10);
};
 userSchema.methods.comparePassword = async function (oldPassword) {
   return bcrypt.compare(oldPassword, this.password);
 };
  

const User = mongoose.model("User", userSchema);
module.exports = User;