import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Edu from './Edu/Edu';
import useStyles from './styles';
import { getEducation } from '../../actions/education';

const Education = ({ setCurrentEducationId }) => {
  const education = useSelector((state) => state.education);
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  
    useEffect( () => {
      if(!user?.result) navigate('/auth');
      dispatch(getEducation(user?.result?.googleId || user?.result?._id));
  }, [dispatch]);


  return (
    !education.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {education.map((edu) => (
          <Grid key={edu._id} item xs={12} sm={6} md={6}>
            <Edu edu={edu} setCurrentEducationId={setCurrentEducationId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Education;