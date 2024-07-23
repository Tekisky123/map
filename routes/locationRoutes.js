import express from 'express';
import { shareLocation, getLocation } from '../controllers/locationController.js';

const router = express.Router();

router.post('/share-location', shareLocation);
router.get('/get-location/:userMobile', getLocation);

export default router;