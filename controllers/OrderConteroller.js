import OrderModel from '../models/Order.js';

export const create = async (req, res) => {
    try {
        const {name, phone, adress, title, color, price, availability, comment} = req.body;

        const order = await OrderModel.create({
            name, 
            phone, 
            adress,
            title,
            color,
            price,
            availability,
            comment
        });

        res.json(order);

    } catch (error) {
        console.error(error);
    }
};

export const getAll = async (req, res) => {
    try{
        const allOrders = await OrderModel.find();
        res.json(allOrders);
    } catch(e) {
        console.log(e);
    }
}

export const getOne = async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await OrderModel.findOne({ _id: orderId });
    
        res.json(order);
      } catch (error) {
        console.error(error);
      }
}

export const remove = async (req, res) => {
    try {
        const orderId = req.params.id

        const doc = await OrderModel.findByIdAndDelete({ _id: orderId })

        return res.json({ success: true })
    } catch (e) {
        console.log(e)
    }
}