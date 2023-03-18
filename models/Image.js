import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
    }
},{timestamps: true,})

export default mongoose.model('Image',ImageSchema)