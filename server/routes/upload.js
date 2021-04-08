import express from 'express';
import { uploadImage, getImage } from '../controllers/upload.js';

const router = express.Router();

router.post('/', uploadImage);
router.get('/:id', getImage);

export default router;