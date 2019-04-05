import Tags from './Tags';

const fixture = [
  {
    id: 0,
    tag: 'покупки',
  },
  {
    id: 1,
    tag: 'Работа',
  },
  {
    id: 2,
    tag: 'ШРИ',
  },
];

describe('Tags', () => {
  let tags: Tags;

  beforeEach(() => {
    tags = Tags.factory(fixture);
  });

  afterEach(() => {
    tags = Tags.factory([]);
  });

  describe('toArray()', () => {
    it('should return an array', () => {
      const array = tags.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(3);
    });
  });
  describe('addTag()', () => {
    it('should add tag', () => {
      const tag = {
        id: 33,
        tag: 'Новый',
      };
      tags.addTag(tag);
      expect(tags.toArray()).toHaveLength(4);
    });
  });
  describe('hasTag()', () => {
    it('should return true if tag exists', () => {
      expect(tags.hasTag(0)).toBeTruthy();
      expect(tags.hasTag(1)).toBeTruthy();
      expect(tags.hasTag(2)).toBeTruthy();
    });
    it('should return false if tag doesnt exists', () => {
      expect(tags.hasTag(-1)).toBeFalsy();
      expect(tags.hasTag(3)).toBeFalsy();
      expect(tags.hasTag(99)).toBeFalsy();
    });
  });
});
