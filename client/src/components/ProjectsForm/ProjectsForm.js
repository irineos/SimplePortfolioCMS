import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';

import { createProject, updateProject } from '../../actions/projects';


const ProjectForm = ({ currentProjectId, setCurrentProjectId }) => {
    const [projectData, setProjectData] = useState({ 
      title: '', description: '', url: '', image: '' 
    });
    const project = useSelector((state) => (currentProjectId ? state.projects.find((project) => project._id === currentProjectId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (project) setProjectData(project);
      }, [project]);

      const clear = () => {
        setCurrentProjectId(null);
        setProjectData({ title: '', description: '', url: '', image: ''});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentProjectId) {
          dispatch(updateProject(currentProjectId, projectData));
          clear();
          
        } else {
          dispatch(createProject(projectData));
          clear();
        }
      };

    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentProjectId ? `Editing "${project.title}"` : 'Add a Project'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
        <TextField name="url" variant="outlined" label="Url" fullWidth value={projectData.url} onChange={(e) => setProjectData({ ...projectData, url: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
}

export default ProjectForm;