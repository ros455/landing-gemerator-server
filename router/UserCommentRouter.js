import {Router} from 'express';
import * as UserCommentController from '../controllers/UserCommentController.js';

const router = new Router();

router.post('/create-user-comment', UserCommentController.upload.single('imageUrl'), UserCommentController.create);

router.get('/get-all-comments',UserCommentController.getAll);

router.get('/get-comment/:id', UserCommentController.getOne);

router.delete('/remove-user-comment/:id',UserCommentController.remove);

router.patch('/update-comment/:id',UserCommentController.update);

router.patch('/update-image/:id',UserCommentController.upload.single('imageUrl'),UserCommentController.updateImage);

export default router;