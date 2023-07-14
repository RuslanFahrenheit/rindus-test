export const getAverageTemperature = (temperatures) => (
  Math.round(temperatures.reduce((acc, temprature) => acc + temprature, 0) / temperatures.length)
);

export const normalizeCityWeather = (cityWeather) => {
  const temperatures = cityWeather.forecast.map(day => day.temperature);
  const averageTemperature = getAverageTemperature(temperatures);

  return {
    ...cityWeather,
    averageTemperature,
  };
};
