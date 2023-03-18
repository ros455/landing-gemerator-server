import TimerModel from '../models/Timer.js';

export const getTimer = async (req,res) => {
    try{
        const timerId = '640f2e8e4aab71f1da64aa87';
        const data = await TimerModel.findOne({ _id: timerId });
        res.json(data);
    } catch(e) {
        console.log(e);
    }
}

export const updateTimer = async (req, res) => {
    try {
        const timerId = '640f2e8e4aab71f1da64aa87';
        const { timer } = req.body;

        const data = await TimerModel.updateOne(
            { _id: timerId },
            { timer }
        )

        res.json(data)
    } catch (e) {
        console.log(e);
    }
}

export const createTimer = async (req, res) => {
    try{
        const {timer} = req.body;

        const data = await TimerModel.create({
            timer
        });
    
        res.json(data);
    } catch(e) {
        console.log(e);
    }
}