import mongoose from "mongoose";

const UserCommentSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String
    },
    rating: {
        type: String,
    },
},{timestamps: true,})

export default mongoose.model('UserComment',UserCommentSchema);