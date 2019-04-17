import * as request from 'supertest';

import app from '../../app';
import { Note } from '../../types';
import * as fixture from '../../fixture.json';
import noteRepository from '../../repositories/noteRepository';

const flushRepository = (): void => {
  noteRepository.clear();
  fixture.notes.forEach(note => noteRepository.addNote(note as Note));
};

beforeEach(() => flushRepository());

describe('/api/notes tests', () => {
  describe('GET /', () => {
    it('should return notes', async () => {
      const response: request.Response = await request(app).get('/api/notes');
      expect(response.status).toBe(200);
      const { body } = response;
      expect(body.ok).toBeTruthy();
      expect(body.results).toBeDefined();
      const { tags, colors, notes } = body.results;
      expect(tags).toBeInstanceOf(Array);
      expect(tags).toHaveLength(9);
      expect(colors).toBeInstanceOf(Array);
      expect(colors).toHaveLength(7);
      expect(notes).toBeInstanceOf(Array);
      expect(notes).toHaveLength(11);
    });
    it('should not return archived notes', async () => {
      const response: request.Response = await request(app).get('/api/notes');
      expect(response.status).toBe(200);
      const { body } = response;
      expect(body.ok).toBeTruthy();
      expect(body.results).toBeDefined();
      const { notes } = body.results;

      notes.forEach((note: Note) => {
        expect(note.archived).toBeUndefined();
      });
    });
  });

  describe('GET ?color={id}', () => {
    it('should filter notes by color', async () => {
      const response: request.Response = await request(app).get(
        '/api/notes?color=1'
      );
      expect(response.status).toBe(200);
      const { body } = response;
      expect(body.ok).toBeTruthy();
      expect(body.results).toBeDefined();
      const { tags, colors, notes } = body.results;
      expect(tags).toBeInstanceOf(Array);
      expect(colors).toBeInstanceOf(Array);
      expect(notes).toBeInstanceOf(Array);
      expect(notes).toHaveLength(1);
    });
    it("should throw 400 'incorrect color' if color doesnt exists", async () => {
      const response: request.Response = await request(app).get(
        '/api/notes?color=99999'
      );
      expect(response.status).toBe(400);
      const { body } = response;
      expect(body.ok).toBeFalsy();
      expect(body.error).toBe('incorrect color');
    });
  });

  describe('POST /', () => {
    it('should create a new note', async () => {
      const postResponse: request.Response = await request(app)
        .post('/api/notes')
        .send({
          note: {
            id: 99,
            type: 'image',
            created: Date.now(),
          },
        });
      expect(postResponse.status).toBe(200);
      expect(postResponse.body.ok).toBeTruthy();

      const getResponse: request.Response = await request(app).get(
        '/api/notes'
      );
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.ok).toBeTruthy();
      expect(getResponse.body.results).toBeDefined();
      expect(getResponse.body.results.notes).toHaveLength(12);
    });
    it('should fail if note not passed', async () => {
      const response = await request(app).post('/api/notes');
      expect(response.status).toBe(500);
      const { body } = response;
      expect(body.ok).toBeFalsy();
      expect(body.error).toBe("No 'note' in the request body");
    });
    it("should assign a 's' note size by default", async () => {
      const postResponse: request.Response = await request(app)
        .post('/api/notes')
        .send({
          note: {
            id: 20,
            type: 'text',
            created: Date.now(),
          },
        });
      expect(postResponse.status).toBe(200);
      expect(postResponse.body.ok).toBeTruthy();

      const getResponse: request.Response = await request(app).get(
        '/api/notes/20'
      );
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.ok).toBeTruthy();
      expect(getResponse.body.note).toBeDefined();
      expect(getResponse.body.note.size).toBe('s');
    });
  });
  describe('GET /:id', () => {
    it('should return a note', async () => {
      const response: request.Response = await request(app).get('/api/notes/3');
      expect(response.status).toBe(200);
      expect(response.body.ok).toBeTruthy();
      expect(response.body.note).toEqual({
        id: 3,
        type: 'text',
        text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
        tags: [0],
        size: 's',
        created: 1551593220000,
      });
    });
    it('should return 404 if note doesnt exists', async () => {
      const response: request.Response = await request(app).get(
        '/api/notes/9999'
      );
      expect(response.status).toBe(404);
      expect(response.body.ok).toBeFalsy();
      expect(response.body.error).toBe(`note with id '9999' doesnt exists`);
    });
  });

  describe('DELETE /:id', () => {
    it('should delete a note', async () => {
      const getResponse: request.Response = await request(app).get(
        '/api/notes/3'
      );
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.ok).toBeTruthy();
      expect(getResponse.body.note).toEqual({
        id: 3,
        type: 'text',
        text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
        tags: [0],
        size: 's',
        created: 1551593220000,
      });
      const deleteResponse: request.Response = await request(app).delete(
        '/api/notes/3'
      );
      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body.ok).toBeTruthy();

      const response: request.Response = await request(app).get('/api/notes/3');
      expect(response.status).toBe(404);
      expect(response.body.ok).toBeFalsy();
      expect(response.body.error).toBe(`note with id '3' doesnt exists`);
    });
  });
  describe('PATCH /:id', () => {
    it('should update a note', async () => {
      const note = {
        id: 11,
        type: 'text',
        text: 'Обновленный текст',
        tags: [1, 5],
        size: 'm',
        created: 1651593230000,
      };

      const getResponse: request.Response = await request(app).get(
        '/api/notes/11'
      );
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.ok).toBeTruthy();
      expect(getResponse.body.note).toEqual({
        id: 11,
        type: 'text',
        title: 'Не забыть выгулять Сиба-Ину',
        color: 3,
        size: 's',
        created: 1520160803000,
      });
      const patchResponse: request.Response = await request(app)
        .patch('/api/notes/11')
        .send({ note });
      expect(patchResponse.status).toBe(200);
      expect(patchResponse.body.ok).toBeTruthy();

      const response: request.Response = await request(app).get(
        '/api/notes/11'
      );
      expect(response.status).toBe(200);
      expect(response.body.ok).toBeTruthy();
      expect(response.body.note).toEqual(note);
    });
    it('should throw 500 if note with id doesnt exists', async () => {
      const note = {
        id: 111111,
      };
      const response: request.Response = await request(app)
        .patch(`/api/notes/${note.id}`)
        .send({ note });
      expect(response.status).toBe(500);
      expect(response.body.ok).toBeFalsy();
      expect(response.body.error).toBe(`there is no note with id: ${note.id}`);
    });
  });
});
