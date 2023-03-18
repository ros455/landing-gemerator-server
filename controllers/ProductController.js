import ProductModel from '../models/Product.js';


export const create = async (req, res) => {
    try {
        const {title, color, price, availability} = req.body;

        const product = await ProductModel.create({
            title,
            color,
            price,
            availability
        });

        res.json(product);

    } catch (error) {
        console.error(error);
    }
};

export const update = async (req, res) => {
    try {
        const { title, color, price, availability } = req.body;
        const productId = req.params.id;
        const product = await ProductModel.updateOne(
            { _id: productId },
            {
                title,
                color,
                price,
                availability
            });

        res.json(product);
    } catch (e) {
        console.log(e);
    }
}

  export const getAll = async (req, res) => {
    try{
        const allProduct = await ProductModel.find();
        res.json(allProduct);
    } catch(e) {
        console.log(e);
    }
}