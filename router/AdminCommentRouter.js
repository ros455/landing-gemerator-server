import {Router} from 'express';
import * as AdminCommentController from '../controllers/AdminCommentController.js';

const router = new Router();

router.get('/get-all-admin-comments',AdminCommentController.getAll);
router.get('/get-admin-comment/:id', AdminCommentController.getOne);
router.post('/create-comment',AdminCommentController.upload.single('imageUrl'), AdminCommentController.create);
router.delete('/remove-comment/:id',AdminCommentController.remove);
router.patch('/update-admin-comment/:id',AdminCommentController.update);
router.patch('/update-admin-image/:id',AdminCommentController.upload.single('imageUrl'),AdminCommentController.updateImage);

export default router;