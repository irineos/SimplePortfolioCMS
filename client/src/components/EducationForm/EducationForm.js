import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

import { createEducation, updateEducation } from '../../actions/education';


const EducationForm = ({ currentEducationId, setCurrentEducationId }) => {
    const [educationData, setEducationData] = useState({ 
      title: '', period: '', description: '' 
    });
    const education = useSelector((state) => (currentEducationId ? state.education.find((edu) => edu._id === currentEducationId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (education) setEducationData(education);
      }, [education]);

      const clear = () => {
        setCurrentEducationId(null);
        setEducationData({ title: '', period: '', description: ''});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentEducationId) {
          dispatch(updateEducation(currentEducationId, educationData));
          clear();
          
        } else {
          dispatch(createEducation(educationData));
          clear();
        }
      };

    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentEducationId ? `Editing "${education.title}"` : 'Add Education'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={educationData.title} onChange={(e) => setEducationData({ ...educationData, title: e.target.value })} />
        <TextField name="period" variant="outlined" label="Period" fullWidth value={educationData.period} onChange={(e) => setEducationData({ ...educationData, period: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={educationData.description} onChange={(e) => setEducationData({ ...educationData, description: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
}

export default EducationForm;