import { weather } from './weather.js';

const controllers = [
  weather,
];

export const addRoutes = (app) => controllers.forEach((f) => f(app));
