import { GET_COVID_PROVINSI } from "../constants";

let initialState = {
  getCovidProvinsi: false,
};

const covid = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_PROVINSI:
      return {
        ...state,
        getCovidProvinsi: action.payload.data,
      };
    default:
      return state;
  }
};

export default covid;
