import SkillsData from "../models/skillsData.js";
import mongoose from 'mongoose';


export const getSkills = async (req, res) => {
    const { userId } = req.query;
    try {
        const skillsData = await SkillsData.find({ creator: userId });

        res.status(200).json(skillsData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSkill = async (req, res) => {
    const skill = req.body;
    
    const newSkill = new SkillsData({ ...skill, creator: req.userId }); 

    try {
        await newSkill.save();

        res.status(201).json(newSkill);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSkill = async (req, res) => {
    const { id } = req.params;
    const { title, technologies } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No skill with id: ${id}`);

    const updatedSkill = { title, technologies, _id: id};

    await SkillsData.findByIdAndUpdate(id, updatedSkill, { new: true });

    res.json(updatedSkill);
}

export const deleteSkill = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No skill with id: ${id}`);

    await SkillsData.findByIdAndRemove(id);

    res.json({ message: "Skill deleted successfully." });
}