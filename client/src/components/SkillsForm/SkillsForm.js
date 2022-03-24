import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';

import { createSkill, updateSkill } from '../../actions/skills';


const SkillsForm = ({ currentSkillId, setCurrentSkillId }) => {
    const [skillData, setSkillData] = useState({ 
      title: '', technologies: '' 
    });
    const skill = useSelector((state) => (currentSkillId ? state.skills.find((skill) => skill._id === currentSkillId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (skill) setSkillData(skill);
      }, [skill]);

      const clear = () => {
        setCurrentSkillId(null);
        setSkillData({ title: '', technologies: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentSkillId) {
          dispatch(updateSkill(currentSkillId, skillData));
          clear();
          
        } else {
          dispatch(createSkill(skillData));
          
          clear();
        }
      };

    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentSkillId ? `Editing "${skill.title}"` : 'Add a Skill'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={skillData.title} onChange={(e) => setSkillData({ ...skillData, title: e.target.value })} />
        <TextField name="technologies" variant="outlined" label="Technologies" fullWidth value={skillData.technologies} onChange={(e) => setSkillData({ ...skillData, technologies: e.target.value.split(',') })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
}

export default SkillsForm;