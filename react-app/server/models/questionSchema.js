
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    question: { type : String, require: true}, 
    options : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);