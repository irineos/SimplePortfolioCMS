import mongoose from 'mongoose';

const educationSchema = mongoose.Schema({
            title: String,
            period: String,
            description: String,
            creator: String,
            createdAt: {
                type: Date,
                default: new Date(),
            }
});


const EducationData = mongoose.model('EducationData', educationSchema);

export default EducationData;