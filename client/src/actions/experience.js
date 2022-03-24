import * as api from '../api';

export const getExperience = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchExperience(userId);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
};

export const createExperience = (experience) => async (dispatch) => {
    try {
      const { data } = await api.createExperience(experience);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateExperience = (id, experience) => async (dispatch) => {
  try {
    const { data } = await api.updateExperience(id, experience);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    await api.deleteExperience(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};