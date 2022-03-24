import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import projectsRoutes from './routes/project.js';
import skillsRoutes from './routes/skills.js';
import educationRoutes from './routes/education.js';
import experinceRoutes from './routes/experience.js';
import resumeRoutes from './routes/resume.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/projects', projectsRoutes);
app.use('/skills', skillsRoutes);
app.use('/education', educationRoutes);
app.use('/experience', experinceRoutes);
app.use('/', resumeRoutes);
//app.use('/user', userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

