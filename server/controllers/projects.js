import ProjectData from "../models/projectData.js";
import mongoose from 'mongoose';


export const getProject = async (req, res) => {
    const { userId } = req.query;
    try {
        const projectData = await ProjectData.find({ creator: userId });

        res.status(200).json(projectData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const project = req.body;
    const newProject = new ProjectData({ ...project, creator: req.userId }); 

    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const {title, description, url, image} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    const updatedProject = {title, description, url, image, _id: id};

    await ProjectData.findByIdAndUpdate(id, updatedProject, { new: true });

    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await ProjectData.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}