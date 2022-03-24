import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Skill from './Skill/Skill';
import useStyles from './styles';
import { getSkills } from '../../actions/skills';

const Skills = ({ setCurrentSkillId }) => {
  const skills = useSelector((state) => state.skills);
  //console.log(skills)
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

    useEffect( () => {
      if(!user?.result) navigate('/auth');
      dispatch(getSkills(user?.result?.googleId || user?.result?._id));
  }, [dispatch]);


  return (
    !skills.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {skills.map((skill) => (
          <Grid key={skill._id} item xs={12} sm={6} md={6}>
            <Skill skill={skill} setCurrentSkillId={setCurrentSkillId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Skills;