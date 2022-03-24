import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

import { createExperience, updateExperience } from '../../actions/experience';


const ExperienceForm = ({ currentExperienceId, setCurrentExperienceId }) => {
    const [experienceData, setExprienceData] = useState({ 
        companyName: '', companyUrl: '', period: '', description: ''
    });
    const experience = useSelector((state) => (currentExperienceId ? state.experience.find((edu) => edu._id === currentExperienceId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (experience) setExprienceData(experience);
      }, [experience]);

      const clear = () => {
        setCurrentExperienceId(null);
        setExprienceData({ companyName: '', companyUrl: '', period: '', description: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentExperienceId) {
          dispatch(updateExperience(currentExperienceId, experienceData));
          clear();
          
        } else {
          dispatch(createExperience(experienceData));
          clear();
        }
      };

    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentExperienceId ? `Editing "${experience.companyName}"` : 'Add Experience'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={experienceData.companyName} onChange={(e) => setExprienceData({ ...experienceData, companyName: e.target.value })} />
        <TextField name="url" variant="outlined" label="Url" fullWidth value={experienceData.companyUrl} onChange={(e) => setExprienceData({ ...experienceData, companyUrl: e.target.value })} />
        <TextField name="period" variant="outlined" label="Period" fullWidth value={experienceData.period} onChange={(e) => setExprienceData({ ...experienceData, period: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={experienceData.description} onChange={(e) => setExprienceData({ ...experienceData, description: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
}

export default ExperienceForm;