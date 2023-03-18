import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: String
    },
    availability: {
        type: String
    },
},{timestamps: true,})

export default mongoose.model('Product', ProductSchema);