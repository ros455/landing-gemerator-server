import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import TimerRouter from './router/TimerRouter.js';
import UserCommentRouter from './router/UserCommentRouter.js';
import AdminCommentRouter from './router/AdminCommentRouter.js';
import ProductRouter from './router/ProductRouter.js';

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

app.listen(4444,() => {
    console.log('Server start');
})