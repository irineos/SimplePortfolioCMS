import * as api from '../api';

export const getSkills = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchSkills(userId);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createSkill = (skill) => async (dispatch) => {
    try {
      
      const { data } = await api.createSkill(skill);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateSkill = (id, skill) => async (dispatch) => {
  try {
    const { data } = await api.updateSkill(id, skill);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await api.deleteSkill(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};