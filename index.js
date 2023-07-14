import Express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { addRoutes } from './routes/index.js';

dotenv.config();

export const startServer = () => {
  const app = new Express();

  app.use(morgan('combined'));

  addRoutes(app);

  return app;
};
