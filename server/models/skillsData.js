import mongoose from 'mongoose';

const skillsSchema = mongoose.Schema({
            title: String,
            technologies: [String],
            creator: String,
            createdAt: {
                type: Date,
                default: new Date(),
            }
});

const SkillsData = mongoose.model('SkillsData', skillsSchema);

export default SkillsData;