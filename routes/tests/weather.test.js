import request from 'supertest';
import { startServer } from '../../index.js';

const app = startServer();

describe('GET /weather/Tokyo', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/weather/Tokyo');

    expect(response.statusCode).toBe(200);
  });

  it('should return 404', async () => {
    const response = await request(app).get('/weather/NonExistentCity');

    expect(response.statusCode).toBe(404);
  });
});
