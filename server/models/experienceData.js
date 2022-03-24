import mongoose from 'mongoose';

const experinceSchema = mongoose.Schema({
            companyName: String,
            companyUrl: String,
            period: String,
            description: String,
            creator: String,
            createdAt: {
                type: Date,
                default: new Date(),
            }
});


const ExperienceData = mongoose.model('ExperienceData', experinceSchema);

export default ExperienceData;