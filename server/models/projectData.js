import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
            title: String,
            description: String,
            url: String,
            image: String,
            creator: String,
            createdAt: {
                type: Date,
                default: new Date(),
            }
});


const ProjectData = mongoose.model('ProjectData', projectSchema);

export default ProjectData;




  // name: String,
    // email: String
    // location: String,
    // phoneNumber: String,
    // linkedIn: {
    //     name: String,
    //     url: String
    // },
    // github: {
    //     name: String,
    //     url: String
    // },
    // aboutText: String,
    // experience: [
    //     {
    //         companyName: String,
    //         companyUrl: String,
    //         duration: String,
    //         description: String
    //     }
    // ],
    // education: [
    //     {
    //         title: String,
    //         period: String,
    //         description: String
    //     }
    // ],
    // skills:[
    //     {
    //         title: String,
    //         technologies: [String]
    //     }
    // ],