import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Exp from './Exp/Exp';
import useStyles from './styles';
import { getExperience } from '../../actions/experience';

const Experience = ({ setCurrentExperienceId }) => {
  const experience = useSelector((state) => state.experience);
  const classes = useStyles();
  const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    
      useEffect( () => {
        if(!user?.result) navigate('/auth');
      dispatch(getExperience(user?.result?.googleId || user?.result?._id));
  }, [dispatch]);


  return (
    !experience.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {experience.map((exp) => (
          <Grid key={exp._id} item xs={12} sm={6} md={6}>
            <Exp exp={exp} setCurrentExperienceId={setCurrentExperienceId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Experience;