import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }) ;

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchProjects = (userId) => API.get(`/projects/creator?userId=${userId}`);
export const createProject = (newProject) => API.post(`/projects`, newProject);
export const updateProject = (id, updateProject) => API.patch(`/projects/${id}`, updateProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const fetchSkills = (userId) => API.get(`/skills/creator?userId=${userId}`);
export const createSkill = (newSkill) => API.post(`/skills`, newSkill);
export const updateSkill = (id, updateSkill) => API.patch(`/skills/${id}`, updateSkill);
export const deleteSkill = (id) => API.delete(`/skills/${id}`);

export const fetchEducation = (userId) => API.get(`/education/creator?userId=${userId}`);
export const createEducation = (newEducation) => API.post(`/education`, newEducation);
export const updateEducation = (id, updateEducation) => API.patch(`/education/${id}`, updateEducation);
export const deleteEducation = (id) => API.delete(`/education/${id}`);

export const fetchExperience = (userId) => API.get(`/experience/creator?userId=${userId}`);
export const createExperience = (newExperience) => API.post(`/experience`, newExperience);
export const updateExperience = (id, updateExperience) => API.patch(`/experience/${id}`, updateExperience);
export const deleteExperience = (id) => API.delete(`/experience/${id}`);

export const fetchResume = (userId) => API.get(`/creator?userId=${userId}`);
export const createResume = (newResume) => API.post(`/`, newResume);
export const updateResume = (id, updateResume) => API.patch(`/${id}`, updateResume);
export const deleteResume = (id) => API.delete(`/${id}`);

//export const signIn = (formData) => API.post(`/user/signin`, formData);
//export const signUp = (formData) => API.post(`/user/signup`, formData);