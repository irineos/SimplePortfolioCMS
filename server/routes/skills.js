import express from 'express';
import { getSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skills.js';

import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/creator', getSkills);
router.post('/', auth, createSkill);
router.patch('/:id', auth, updateSkill);
router.delete('/:id', auth, deleteSkill);


export default router;