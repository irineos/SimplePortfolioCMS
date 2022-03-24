import express from 'express';
import { getExperience, createExperience, updateExperience, deleteExperience } from '../controllers/experience.js';

import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/creator', getExperience);
router.post('/', auth, createExperience);
router.patch('/:id', auth, updateExperience);
router.delete('/:id', auth, deleteExperience);


export default router;