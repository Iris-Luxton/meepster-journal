import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';
const { Schema } = mongoose;


const userSchema = new Schema({
  email: { type: String, required: true, unique: true}, 
  password: { type: String, required: true}
});

// We can also generate hashing passwords to protect our user and prevent hacker from 
// pasword matching, note that the the higher the genSalt, the longer it takes for hacker and also the longer it take
// for user to sign up, so find the balance (default is 10)  

//validation

userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
    throw Error('All fields must be filled')
}
if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
}
if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
}
//note that you can't use arror function when using "this" keyword, but have to use regular function
const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}
  // static login method

  userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }
    return user
}
// Define the checkPassword method
userSchema.methods.checkPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

export default mongoose.model('User', userSchema);


