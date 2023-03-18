import multer from 'multer';
import cloudinary from 'cloudinary';
import fs from 'fs';
import Image from '../models/Image.js';

// конфігуруємо Cloudinary
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

const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('Image file not provided');
    }

    // завантажуємо файл до Cloudinary
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    // створюємо новий об'єкт Image та зберігаємо його до бази даних
    const image = new Image({
      imageUrl: result.secure_url,
    });
    await image.save();

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

export { upload, uploadImage };