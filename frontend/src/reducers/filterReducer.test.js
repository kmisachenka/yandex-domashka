import filterReducer from './filterReducer';

describe('filterReducer', () => {
  describe('TOGGLE_COLOR', () => {
    it('should set active color with empty initial state', () => {
      const state = filterReducer(
        { colors: [] },
        {
          type: 'TOGGLE_COLOR',
          payload: {
            id: 1,
          },
        }
      );
      expect(state).toEqual({ colors: [1] });
    });
    it('should disable active color if toogled before', () => {
      const state = filterReducer(
        { colors: [1] },
        {
          type: 'TOGGLE_COLOR',
          payload: {
            id: 1,
          },
        }
      );
      expect(state).toEqual({ colors: [] });
    });
    it('should able to toogle a few colors', () => {
      const state = filterReducer(
        { colors: [1] },
        {
          type: 'TOGGLE_COLOR',
          payload: {
            id: 2,
          },
        }
      );
      expect(state).toEqual({ colors: [1, 2] });
    });
    it('should able to toogle out one color from many', () => {
      const state = filterReducer(
        { colors: [1, 2] },
        {
          type: 'TOGGLE_COLOR',
          payload: {
            id: 2,
          },
        }
      );
      expect(state).toEqual({ colors: [1] });
    });
  });
});
