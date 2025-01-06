import request from 'supertest';
import server from '../server';

describe('Basic Route Tests', () => {
  afterAll(done => {
    server.close(done);
  });

  it('should return 200 for the root route', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('API is running');
  });
});