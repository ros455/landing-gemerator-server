import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import TimerRouter from './router/TimerRouter.js';
import UserCommentRouter from './router/UserCommentRouter.js';
import AdminCommentRouter from './router/AdminCommentRouter.js';
import ProductRouter from './router/ProductRouter.js';
import OrderRouter from './router/OrderRouter.js';

dotenv.config();
const app = express();

const db = 'mongodb+srv://rostiko_455:qwerty12345@cluster0.49hwdwu.mongodb.net/?retryWrites=true&w=majority';

mongoose
.connect(db)
.then(() => {
    console.log('DB Start');
})

app.use(cors());
app.use(express.json());

app.use(TimerRouter);
app.use(UserCommentRouter);
app.use(AdminCommentRouter);
app.use(ProductRouter);
app.use(OrderRouter);

app.listen(process.env.PORT,() => {
    console.log('Server start', process.env.PORT);
})