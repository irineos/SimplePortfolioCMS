import ExperienceData from "../models/experienceData.js";
import mongoose from 'mongoose';


export const getExperience = async (req, res) => {
    const { userId } = req.query;
    try {
        const experienceData = await ExperienceData.find({ creator: userId });

        res.status(200).json(experienceData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createExperience = async (req, res) => {
    const experience = req.body;
    const newExperience = new ExperienceData({ ...experience, creator: req.userId }); 

    try {
        await newExperience.save();

        res.status(201).json(newExperience);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateExperience = async (req, res) => {
    const { id } = req.params;
    const { companyName, companyUrl, period, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Experience with id: ${id}`);

    const updatedExperience = {companyName, companyUrl, period, description, _id: id};

    await ExperienceData.findByIdAndUpdate(id, updatedExperience, { new: true });

    res.json(updatedExperience);
}

export const deleteExperience = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Experience with id: ${id}`);

    await ExperienceData.findByIdAndRemove(id);

    res.json({ message: "Experience deleted successfully." });
}