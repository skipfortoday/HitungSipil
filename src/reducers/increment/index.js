import { GET_INCREMENT_VALUE } from "../../constants";

let initialState = {
  dataIncrement: 0,
};

const increment = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCREMENT_VALUE:
      return {
        ...state,
        dataIncrement: action.payload.data,
      };
    default:
      return state;
  }
};

export default increment;
