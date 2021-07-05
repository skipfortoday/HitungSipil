import { GET_INCREMENT_VALUE } from "../constants";

export const getDataIncrement = (dataIncrement) => {
  return (dispatch) => {
    dispatch({
      type: GET_INCREMENT_VALUE,
      payload: {
        data: dataIncrement,
      },
    });
  };
};
