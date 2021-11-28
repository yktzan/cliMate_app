import {
  GET_COUNTRY_WEATHER,
  GET_COUNTRY_WEATHER_SUCCESS,
  GET_COUNTRY_WEATHER_FAIL,
  SELECT_COUNTRY_WEATHER,
  SELECT_COUNTRY_WEATHER_FAIL,
  SELECT_COUNTRY_WEATHER_SUCCESS,
} from '../action/ActionType';

const INITIAL_STATE = {
  weather_data: [],
  selected_weather_data_index: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRY_WEATHER:
      return {
        ...state,
      };
    case GET_COUNTRY_WEATHER_SUCCESS:
      return {
        ...state,
        weather_data: action.weather_data,
        selected_weather_data_index: 0, // by default it will choose 1st one
      };
    case GET_COUNTRY_WEATHER_FAIL:
      // action for when get weather fail
      return {
        ...state,
      };

    case SELECT_COUNTRY_WEATHER:
      return {
        ...state,
        selected_weather_data_index: action.index,
      };

    default:
      return state;
  }
};
