import * as api from '../api';

export const getEducation = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchEducation(userId);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
};

export const createEducation = (education) => async (dispatch) => {
    try {
      const { data } = await api.createEducation(education);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateEducation = (id, education) => async (dispatch) => {
  try {
    const { data } = await api.updateEducation(id, education);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    await api.deleteEducation(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};