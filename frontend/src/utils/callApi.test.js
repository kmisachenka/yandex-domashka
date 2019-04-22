import callApi from './callApi';

describe('callApi', () => {
  beforeEach(() => fetch.resetMocks());
  it('should return parsed object', async () => {
    fetch.once(
      JSON.stringify({
        ok: true,
        results: 'test',
      })
    );
    const response = await callApi('/test');
    expect(fetch).toBeCalled();
    expect(response).toEqual({
      ok: true,
      results: 'test',
    });
  });
  it('should throw an error if api return { ok: false, ... }', async () => {
    fetch.once(
      JSON.stringify({
        ok: false,
        message: 'error message',
      })
    );
    return expect(callApi('/test')).rejects.toEqual(Error('error message'));
  });
});
