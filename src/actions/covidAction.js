import axios from "axios";
import { GET_COVID_PROVINSI } from "../constants";

export const getCovidProvinsi = () => {
  return (dispatch) => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/ID`)
      .then(function (response) {
        dispatch({
          type: GET_COVID_PROVINSI,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_COVID_PROVINSI,
          payload: {
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
