import { combineReducers } from 'redux';
import projects from './projects';
import skills from './skills';
import education from './education';
import experience from './experience';
import resume from './resume';
import auth from './auth';

export default combineReducers({ projects, skills, education, experience, resume, auth });