import * as api from '../api';

export const getResume = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchResume(userId);

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
};

export const createResume = (resume) => async (dispatch) => {
    try {
      const { data } = await api.createResume(resume);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateResume = (id, resume) => async (dispatch) => {
  try {
    const { data } = await api.updateResume(id, resume);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteResume = (id) => async (dispatch) => {
  try {
    await api.deleteResume(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};