import axios from 'axios';
import data from './climate.json';

export const get_countries_weather = async () => {
  // axios.get(request_url); // here is to call api but due to no API available i used JSON files.
  return data;
};
