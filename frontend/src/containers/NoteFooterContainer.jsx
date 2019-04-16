import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { tagsSelector } from '../selectors';

import { NoteFooter } from '../components';
import { archiveNote } from '../actions';
import { Note } from "../types";

const NoteFooterContainer = props => {
  const { note, tags, handleDoneClick } = props;

  return (
    <NoteFooter note={note} tags={tags} handleDoneClick={handleDoneClick} />
  );
};

const mapStateToProps = state => ({
  tags: tagsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleDoneClick: id => dispatch(archiveNote(id)),
});

NoteFooterContainer.propTypes = {
  note: PropTypes.shape(Note).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDoneClick: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFooterContainer);
