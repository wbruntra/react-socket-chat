import axios from 'axios';

export const HEALTH_CHECK = 'HEALTH_CHECK';
export const SERVER_HELLO = 'server/hello';

const API_URL = '/api';

export const checkHealth = () => async dispatch => {
  const serverResponse = await axios.get(API_URL);
  dispatch({
    type: HEALTH_CHECK,
    payload: serverResponse.data,
  });
};

export const sendMessage = (handle, msg) => {
  return {
    type: SERVER_HELLO,
    data: { handle, msg },
  };
};
