import { generate } from './id';

Date.now = jest.fn(() => 123456789);

describe('ID', () => {
  describe('generate()', () => {
    it('should return a correct id', () => {
      expect(generate()).toEqual(123456789);
    });
  });
});
