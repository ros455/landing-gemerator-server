import {Router} from 'express';
import * as ProductsController from '../controllers/ProductController.js';

const router = new Router();

router.post('/create-product',ProductsController.create);
router.patch('/update-product/:id',ProductsController.update);
router.get('/get-all-products',ProductsController.getAll);

export default router;