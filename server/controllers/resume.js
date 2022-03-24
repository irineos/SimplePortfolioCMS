import ResumeData from "../models/resumeData.js";
import mongoose from 'mongoose';


export const getResume = async (req, res) => {
    const { userId } = req.query;
    try {
        const resumeData = await ResumeData.find({ creator: userId });
        

        res.status(200).json(resumeData);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createResume = async (req, res) => {
    const resume = req.body;
    const newResume = new ResumeData({...resume, creator: req.userId}); 

    try {
        await newResume.save();

        res.status(201).json(newResume);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateResume = async (req, res) => {
    const { id } = req.params;
    const { name, email, address, phoneNumber, linkedIn, linkedInUrl, github, githubUrl, aboutText } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Resume with id: ${id}`);

    const updatedResume = {name, email, address, phoneNumber, linkedIn, linkedInUrl, github, githubUrl, aboutText, _id: id};

    await ResumeData.findByIdAndUpdate(id, updatedResume, { new: true });

    res.json(updatedResume);
}

export const deleteResume = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Resume with id: ${id}`);

    await ResumeData.findByIdAndRemove(id);

    res.json({ message: "Resume deleted successfully." });
}