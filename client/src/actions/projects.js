import * as api from '../api';

export const getProjects = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects(userId);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
};

export const createProject = (project) => async (dispatch) => {
    try {
      const { data } = await api.createProject(project);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};