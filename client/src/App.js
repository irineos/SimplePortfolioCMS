import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Typography, Paper } from '@material-ui/core';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectForm from './components/ProjectsForm/ProjectsForm'
import Projects from './components/Projects/Projects'

import SkillsForm from './components/SkillsForm/SkillsForm'
import Skills from './components/Skills/Skills'

import EducationForm from './components/EducationForm/EducationForm'
import Education from './components/Education/Education'

import ExperienceForm from './components/ExperienceForm/ExperienceForm'
import Experience from './components/Experience/Experience'

import Resume from './components/Resume/Resume'


import useStyles from './styles';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth/Auth';
import ParticlesBackground from './components/Particles';
import './index.css';

const App = () => {
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [currentSkillId, setCurrentSkillId] = useState(null);
    const [currentEducationId, setCurrentEducationId] = useState(null);
    const [currentExperienceId, setCurrentExperienceId] = useState(null);
    const [currentResumeId, setCurrentResumeId] = useState(null);
    const classes = useStyles();

    return (
        <>
         <div className={'tsparticles-canvas-el'}>
            <ParticlesBackground/>
        </div>
        <Router>
            <Container maxidth="lg">
                <NavBar/>
                <Grow in>
                    <Routes>
                        <Route exact path="/projects" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={7}>
                                            <Projects setCurrentProjectId={setCurrentProjectId} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <ProjectForm currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                        <Route exact path="/skills" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={7}>
                                            <Skills setCurrentSkillId={setCurrentSkillId} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <SkillsForm currentSkillId={currentSkillId} setCurrentSkillId={setCurrentSkillId} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                        <Route exact path="/education" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={7}>
                                            <Education setCurrentEducationId={setCurrentEducationId} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <EducationForm currentEducationId={currentEducationId} setCurrentEducationId={setCurrentEducationId} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                        <Route exact path="/experience" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={7}>
                                            <Experience setCurrentExperienceId={setCurrentExperienceId} />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <ExperienceForm currentExperienceId={currentExperienceId} setCurrentExperienceId={setCurrentExperienceId} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                        <Route exact path="/" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={12}>
                                            <Resume currentResumeId={currentResumeId} setCurrentResumeId={setCurrentResumeId} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                        <Route exact path="/auth" 
                            element={
                                <Container>
                                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                                        <Grid item xs={12} sm={12}>
                                           <Auth/>
                                        </Grid>
                                    </Grid>
                                </Container>
                            }>
                        </Route>
                    </Routes>
                </Grow>
            </Container>  
        </Router>  
        </>
    );
}

export default App;