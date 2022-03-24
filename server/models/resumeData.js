import mongoose from 'mongoose';

const resumeSchema = mongoose.Schema({
        name: String,
        email: String,
        address: String,
        phoneNumber: String,
        linkedIn: String,
        linkedInUrl: String,
        github: String,
        githubUrl: String,
        aboutText: String,
        creator: String,
});


const ResumeData = mongoose.model('ResumeData', resumeSchema);

export default ResumeData;

