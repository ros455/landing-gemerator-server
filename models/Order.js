import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    adress: {
        type: String
    },
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
    comment: {
        type: String
    },
},{timestamps: true,})

export default mongoose.model('Order', OrderSchema);