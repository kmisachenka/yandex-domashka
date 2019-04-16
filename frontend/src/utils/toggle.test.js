import toggle from './toggle';

describe('toggle()', () => {
  it('should remove element if exists', () => {
    const initialArray = [1, 2];
    expect(toggle(initialArray, 1)).toEqual([2])
  });

  it('should add element if not exists', () => {
    const initialArray = [1, 2];
    expect(toggle(initialArray, 3)).toEqual([1, 2, 3])
  })
});
