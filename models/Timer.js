import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema({
    timer: {
        type: String
    }
},{timestamps: true,})

export default mongoose.model('Timer', TimerSchema)