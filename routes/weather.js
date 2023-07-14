import { normalizeCityWeather } from './normalizers/index.js';

const mockData = [
  {
    city: 'New York',
    currentWeather: 'Sunny',
    forecast: [
      { day: 'Monday', weather: 'Sunny', temperature: 25 },
      { day: 'Tuesday', weather: 'Cloudy', temperature: 22 },
      { day: 'Wednesday', weather: 'Rainy', temperature: 18 }
    ]
  },
  {
    city: 'London',
    currentWeather: 'Cloudy',
    forecast: [
      { day: 'Monday', weather: 'Cloudy', temperature: 20 },
      { day: 'Tuesday', weather: 'Rainy', temperature: 17 },
      { day: 'Wednesday', weather: 'Rainy', temperature: 15 }
    ]
  },
  {
    city: 'Tokyo',
    currentWeather: 'Rainy',
    forecast: [
      { day: 'Monday', weather: 'Sunny', temperature: 20 },
      { day: 'Tuesday', weather: 'Sunny', temperature: 27 },
      { day: 'Wednesday', weather: 'Sunny', temperature: 20 }
    ]
  }
];

export const weather = (app) => {
  app.get('/weather/:city', (req, res) => {
    const city = req.params.city.toLowerCase();

    const cityWeather = mockData.find(data => data.city.toLowerCase() === city);

    if (cityWeather) {
      const response = normalizeCityWeather(cityWeather);

      res.json({ data: response });
    } else {
      res.status(404).json({ error: 'City not found.' });
    }
  });
};
