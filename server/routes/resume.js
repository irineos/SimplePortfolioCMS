import express from 'express';
import { getResume, createResume, updateResume, deleteResume } from '../controllers/resume.js';

import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/creator', getResume);
router.post('/', auth, createResume);
router.patch('/:id', auth, updateResume);
router.delete('/:id', auth, deleteResume);


export default router;