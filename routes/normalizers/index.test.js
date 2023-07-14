import {
  getAverageTemperature,
  normalizeCityWeather,
} from './index.js';

describe('routes normalizers', () => {
  it('should return average temperature', () => {
    expect(getAverageTemperature([20, 30, 25])).toEqual(25);
  });

  it('should return normalized city weather data', () => {
    const cityWeather = {
      city: 'Tokyo',
      currentWeather: 'Sunny',
      forecast: [
        { day: 'Monday', weather: 'Sunny', temperature: 20 },
        { day: 'Tuesday', weather: 'Sunny', temperature: 27 },
        { day: 'Wednesday', weather: 'Sunny', temperature: 20 }
      ],
    };
    const expectedResult = {
      ...cityWeather,
      averageTemperature: 22,
    };

    expect(normalizeCityWeather(cityWeather)).toEqual(expectedResult);
  });
});
