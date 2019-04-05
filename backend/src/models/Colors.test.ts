import Colors from './Colors';

const fixture = [
  {
    id: 0,
    color: '#E84747',
  },
  {
    id: 1,
    color: '#F2994A',
  },
  {
    id: 2,
    color: '#F2C94C',
  },
];

describe('Colors', () => {
  let colors: Colors;

  beforeEach(() => {
    colors = Colors.factory(fixture);
  });

  describe('toArray()', () => {
    it('should return an array', () => {
      const array = colors.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(3);
    });
  });
  describe('addColor()', () => {
    it('should add color', () => {
      const color = {
        id: 4,
        color: '#FFFFFF',
      };
      colors.addColor(color);
      expect(colors.toArray()).toHaveLength(4);
    });
  });
  describe('hasColor()', () => {
    it('should return true if color exists', () => {
      expect(colors.hasColor(0)).toBeTruthy();
      expect(colors.hasColor(1)).toBeTruthy();
      expect(colors.hasColor(2)).toBeTruthy();
    });
    it('should return false if color doesnt exists', () => {
      expect(colors.hasColor(-1)).toBeFalsy();
      expect(colors.hasColor(3)).toBeFalsy();
      expect(colors.hasColor(99)).toBeFalsy();
    });
  });
});
