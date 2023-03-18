import multer from 'multer';
import cloudinary from 'cloudinary';
import fs from 'fs';
import UserCommentModel from '../models/UserComments.js';

//конфігуруємо Cloudinary
cloudinary.config({
    cloud_name: 'dzroxyus8',
    api_key: '235818666177812',
    api_secret: '8-Mw7cej-V9GD1d8oPZ8d3djEgo'
});

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage });

export const create = async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('Image file not provided');
        }

        // завантажуємо файл до Cloudinary
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        // створюємо новий об'єкт UserCommentModel та зберігаємо його до бази даних
        const comment = new UserCommentModel({
            imageUrl: result.secure_url,
            name: req.body.name,
            description: req.body.description,
            rating: req.body.rating
        });
        await comment.save();

        // відправляємо відповідь з URL зображення
        res.json({
            img: result.secure_url,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error uploading file',
        });
    }
};

export const getAll = async (req, res) => {
    try{
        const allComments = await UserCommentModel.find();
        res.json(allComments);
    } catch(e) {
        console.log(e);
    }
}

export const getOne = async (req, res) => {
    try {
        const commentId = req.params.id;

        const doc = await UserCommentModel.findOne({ _id: commentId });
    
        res.json(doc);
      } catch (error) {
        console.error(error);
      }
}

export const remove = async (req, res) => {
    try {
        const commentId = req.params.id

        const doc = await UserCommentModel.findByIdAndDelete({ _id: commentId })

        return res.json({ success: true })
    } catch (e) {
        console.log(e)
    }
}

export const update = async (req, res) => {
    try {
        const { imageUrl, description, name, rating, date } = req.body;
        const commentId = req.params.id;

        const product = await UserCommentModel.updateOne(
            { _id: commentId },
            {
                description,
                name,
                rating,
                date
            }
        )

        res.json(product);

    } catch (e) {
        console.log(e);
    }
}

  export const updateImage = async (req, res) => {
    try {
        const { imageUrl, description, name, rating, date } = req.body;
        const commentId = req.params.id;
        if(!req.file) {
            const product = await UserCommentModel.updateOne(
                { _id: commentId },
                { imageUrl: '', 
                  description, 
                  name, 
                  rating, 
                  date 
              }
              )
        
              res.json(product);
        } else {
            const result = await cloudinary.v2.uploader.upload(req.file.path);
  
            const product = await UserCommentModel.updateOne(
                { _id: commentId },
                { imageUrl: result.secure_url, 
                  description, 
                  name, 
                  rating, 
                  date 
              }
              )
        
              res.json({
                  img: result.secure_url,
              });
        }
    } catch(e) {
      console.log(e);
    }
  }