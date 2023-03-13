import mongoose from "mongoose";
const { Schema } = mongoose;

/** item model */
const itemModel = new Schema({
    itemname: { 
        type : String, 
        required: true,
        unique: true,
    },
});

export default mongoose.model('item', itemModel);