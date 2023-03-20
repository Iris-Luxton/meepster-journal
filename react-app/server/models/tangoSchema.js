import mongoose from "mongoose";
const { Schema } = mongoose;


const tangoSchema = new Schema({
  word: { type: String, required: true},
  romaji: { type: String, required: true},
  meaning: { type: String, required: true }
});

export default mongoose.model('Tango', tangoSchema);


