import * as PropTypes from 'prop-types';

const Note = {
  type: PropTypes.oneOf(['list', 'text', 'image']).isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  created: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.array,
  color: PropTypes.number,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['link', 'image']).isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

// eslint-disable-next-line import/prefer-default-export
export { Note };
