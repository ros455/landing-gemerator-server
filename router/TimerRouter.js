import {Router} from 'express';
import * as TimerController from '../controllers/TimerController.js';

const router = new Router();

router.post('/create-timer',TimerController.createTimer);

router.patch('/update-timer',TimerController.updateTimer);

router.get('/get-timer',TimerController.getTimer);

export default router;