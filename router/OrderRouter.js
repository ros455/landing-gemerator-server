import {Router} from 'express';
import * as OrderController from '../controllers/OrderConteroller.js';

const router = new Router();

router.post('/create-order',OrderController.create);
router.get('/get-all-order',OrderController.getAll);
router.get('/get-one-order/:id',OrderController.getOne);


export default router;