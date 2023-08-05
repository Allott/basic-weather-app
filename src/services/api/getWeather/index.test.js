import getWeather from './index';
import api from '../index';
jest.mock('../index');

describe('getWeather', () => {
    it('should call axios.get', () => {
        getWeather('London');
        expect(api.get).toHaveBeenCalledWith("http://api.weatherapi.com/v1/current.json?key=undefined&q=London&aqi=no");
    });
});