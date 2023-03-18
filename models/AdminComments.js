import mongoose from "mongoose";

const AdminCommentSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: String
    },
    date: {
        type: String
    }
},{timestamps: true,})

export default mongoose.model('AdminComment', AdminCommentSchema);