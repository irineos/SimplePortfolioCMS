import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useStyles from './styles';

import { getResume, createResume, updateResume } from '../../actions/resume';



const Resume = ({ currentResumeId, setCurrentResumeId }) => {
    const [resumeData, setResumeData] = useState({ 
        name:'', email:'', address:'', phoneNumber:'', linkedIn:'', linkedInUrl:'', github:'', githubUrl:'', aboutText:''
    });
    const resumes = useSelector((state) => state.resume);
    const resume = resumes[0];
    const classes = useStyles();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    
      useEffect( () => {
        if(!user?.result) navigate('/auth');
        dispatch(getResume(user?.result?.googleId || user?.result?._id));
    }, [dispatch]);
  

      const restore = () => {
        setResumeData({ name:resume.name, email:resume.email, address:resume.address, phoneNumber:resume.phoneNumber, linkedIn:resume.linkedIn, linkedInUrl:resume.linkedInUrl, github:resume.github, githubUrl:resume.githubUrl, aboutText:resume.aboutText });
      };

      const clear = () => {
        setResumeData({ name:'', email:'', address:'', phoneNumber:'', linkedIn:'', linkedInUrl:'', github:'', githubUrl:'', aboutText:''});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (resumes.length) {
          console.log(resume)
          setCurrentResumeId(resume._id);
          dispatch(updateResume(resume._id, resumeData));
          clear();
          
        } else {
          dispatch(createResume(resumeData));
          clear();
        }
      };

    return (
      <>
        <Paper className={classes.userpaper}>
          <Typography className={classes.usertitle}  variant="h5" component="h2">API call: { `/creator?userId=${user?.result?.googleId || user?.result?._id}` }</Typography>
        </Paper>
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <h3>{`Name: ${ resume ? resume.name : '' }`}</h3>
            <TextField name="name" variant="outlined" label="Name" fullWidth value={resumeData.name}  onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} />
            <h3>{`Email: ${ resume ? resume.email : '' }`}</h3>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} />
            <h3>{`Address: ${ resume ? resume.address : '' }`}</h3>
            <TextField name="address" variant="outlined" label="Address" fullWidth value={resumeData.address} onChange={(e) => setResumeData({ ...resumeData, address: e.target.value })} />
            <h3>{`Phone Number: ${ resume ? resume.phoneNumber : '' }`}</h3>
            <TextField name="phoneNumber" variant="outlined" label="Phone Number" fullWidth value={resumeData.phoneNumber} onChange={(e) => setResumeData({ ...resumeData, phoneNumber: e.target.value })} />
            <h3>{`LinkedIn: ${ resume ? resume.linkedIn  : '' }, ${ resume ? resume.linkedInUrl  : ''}`}</h3>
            <TextField name="linkedIn" variant="outlined" label="LinkedIn" fullWidth value={resumeData.linkedIn} onChange={(e) => setResumeData({ ...resumeData, linkedIn: e.target.value })} />
            <TextField name="linkedInUrl" variant="outlined" label="LinkedInUrl" fullWidth value={resumeData.linkedInUrl} onChange={(e) => setResumeData({ ...resumeData, linkedInUrl: e.target.value })} />
            <h3>{`Github: ${ resume ? resume.github : '' }, ${ resume ? resume.githubUrl : '' }`}</h3>
            <TextField name="github" variant="outlined" label="Github" fullWidth value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} />
            <TextField name="githubUrl" variant="outlined" label="GithubUrl" fullWidth value={resumeData.githubUrl} onChange={(e) => setResumeData({ ...resumeData, githubUrl: e.target.value })} />
            <h3>{`About: ${ resume ? resume.aboutText : '' }`}</h3>
            <TextField name="aboutText" variant="outlined" label="About Text" fullWidth multiline rows={4} value={resumeData.aboutText} onChange={(e) => setResumeData({ ...resumeData, aboutText: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={restore} fullWidth>Restore</Button>
          </form>
        </Paper>
      </>
      
    );
}

export default Resume;