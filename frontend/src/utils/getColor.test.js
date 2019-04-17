import getColor from './getColor';

describe('getColorOrDefault', () => {
  it('should retern #FFFFFF if id doesnt provided', () => {
    const color = getColor([])();
    expect(color).toBe('#FFFFFF');
  });

  it('should retun a linear-gradint if color exists', () => {
    const color = getColor([{ id: 1, color: '#343434' }])(1);
    expect(color).toEqual(
      'linear-gradient(0deg, rgba(52, 52, 52, 0.4), rgba(52, 52, 52, 0.4)), #FFFFFF'
    );
  });
});
