import mongoose from "mongoose";
const { Schema } = mongoose;

/** user model */
const userModel = new Schema({
    username: { 
        type : String, 
        required: true,
        unique: true,
    },
});

export default mongoose.model('User', userModel);