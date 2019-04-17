import * as request from 'supertest';

import app from '../../app';

describe('/api/archive', () => {
  describe('GET /', () => {
    it('should get all archived notes', async () => {
      const postResponse: request.Response = await request(app).post(
        `/api/archive/3`
      );
      expect(postResponse.status).toBe(200);
      expect(postResponse.body.ok).toBeTruthy();
      const response: request.Response = await request(app).get('/api/archive');
      expect(response.status).toBe(200);
      expect(response.body.ok).toBeTruthy();
      expect(response.body.results).toBeInstanceOf(Array);
      expect(response.body.results).toEqual([
        {
          id: 3,
          type: 'text',
          text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
          tags: [0],
          size: 's',
          created: 1551593220000,
          archived: true,
        },
      ]);
    });
  });
  describe('POST /:id', () => {
    it('should archive note by id', async () => {
      const id = 4;
      const postResponse: request.Response = await request(app).post(
        `/api/archive/${id}`
      );
      expect(postResponse.status).toBe(200);
      expect(postResponse.body.ok).toBeTruthy();

      const getResponse: request.Response = await request(app).get(
        `/api/notes/${id}`
      );
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.ok).toBeTruthy();
      expect(getResponse.body.note.archived).toBeTruthy();
    });
    it('should return 400 if archived note doesnt exsits', async () => {
      const id = 99;
      const postResponse: request.Response = await request(app).post(
        `/api/archive/${id}`
      );
      expect(postResponse.status).toBe(400);
      expect(postResponse.body.ok).toBeFalsy();
      expect(postResponse.body.error).toBe("note with id '99' doesnt exists");
    });
  });
});
