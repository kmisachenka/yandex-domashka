import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { NoteFooter } from '../components';
import { archiveNote } from '../actions';
import { Note } from '../types';

const NoteFooterContainer = props => {
  const { note, handleDoneClick } = props;
  const { tags } = note;

  return (
    <NoteFooter note={note} tags={tags} handleDoneClick={handleDoneClick} />
  );
};

const mapDispatchToProps = dispatch => ({
  handleDoneClick: id => dispatch(archiveNote(id)),
});

NoteFooterContainer.propTypes = {
  note: PropTypes.shape(Note).isRequired,
  handleDoneClick: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(NoteFooterContainer);
