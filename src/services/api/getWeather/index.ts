import api from '../index';

const getWeather = (city:string) => api.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`);

export default getWeather;