// // import { FETCH_ALL, CREATE} from '../constants/actionTypes';
import * as api from '../api';

export const getList = () => async (dispatch) => {
    try {
      const { data } = await api.fetchList();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }

  export const createInterview = (interview) => async (dispatch) => {
    try {
      const { data } = await api.create(interview);
  
      dispatch({ type: 'CREATE', payload: data });
    //   console.log({data});
    } catch (error) {
      console.log(error.message);
    }
  };
  