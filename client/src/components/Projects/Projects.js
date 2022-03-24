import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Project from './Project/Project';
import useStyles from './styles';
import { getProjects } from '../../actions/projects';

const Projects = ({ setCurrentProjectId }) => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

    useEffect( () => {
      if(!user?.result) navigate('/auth');
      dispatch(getProjects(user?.result?.googleId || user?.result?._id));
  }, [dispatch]);


  return (
    !projects.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {projects.map((project) => (
          <Grid key={project._id} item xs={12} sm={6} md={6}>
            <Project project={project} setCurrentProjectId={setCurrentProjectId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Projects;