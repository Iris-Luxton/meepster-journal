
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    question: { type : String, require: true}, // create question with [] default value
    options : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);