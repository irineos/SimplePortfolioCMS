import express from 'express';
import { getEducation, createEducation, updateEducation, deleteEducation } from '../controllers/education.js';

import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/creator', getEducation);
router.post('/', auth, createEducation);
router.patch('/:id', auth, updateEducation);
router.delete('/:id', auth, deleteEducation);


export default router;