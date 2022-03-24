import EducationData from "../models/educationData.js";
import mongoose from 'mongoose';


export const getEducation = async (req, res) => {
    const { userId } = req.query;
    try {
        const educationData = await EducationData.find({creator: userId});

        res.status(200).json(educationData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEducation = async (req, res) => {
    const education = req.body;
    const newEducation = new EducationData({ ...education, creator: req.userId }); 

    try {
        await newEducation.save();

        res.status(201).json(newEducation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEducation = async (req, res) => {
    const { id } = req.params;
    const { title, period, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Education with id: ${id}`);

    const updatedEducation = {title, period, description, _id: id};

    await EducationData.findByIdAndUpdate(id, updatedEducation, { new: true });

    res.json(updatedEducation);
}

export const deleteEducation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Education with id: ${id}`);

    await EducationData.findByIdAndRemove(id);

    res.json({ message: "Education deleted successfully." });
}