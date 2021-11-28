import {Alert} from 'react-native';
import {
  GET_COUNTRY_WEATHER,
  GET_COUNTRY_WEATHER_SUCCESS,
  GET_COUNTRY_WEATHER_FAIL,
  SELECT_COUNTRY_WEATHER,
} from './ActionType';
import {get_countries_weather} from '../api';

export const getCountriesWeather = () => {
  return (dispatch, getState) => {
    dispatch({type: GET_COUNTRY_WEATHER});

    get_countries_weather()
      .then(res => {
        dispatch({
          type: GET_COUNTRY_WEATHER_SUCCESS,
          weather_data: res.data,
        });
      })
      .catch(err => {
        let msg = err.message;
        Alert.alert('Warning!', msg);
        dispatch({type: GET_COUNTRY_WEATHER_FAIL, payload: msg});
      });
  };
};

export const selectCountryWeather = index => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_COUNTRY_WEATHER,
      index: index,
    });
  };
};
