import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import {
  filterColorsSelector,
  notesSelector,
  colorsSelector,
} from '../selectors';

import { Notes, Placeholder, Spinner } from '../components';
import { fetchNotes as fetchNotesAction } from '../actions';
import Filter from './FilterContainer';

class NotesContainer extends React.Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes, colors, filterColors, isLoading } = this.props;
    const isFilterActive = () => filterColors.length > 0;
    const getActive = () =>
      notes.filter(note => filterColors.includes(note.color));

    if (isLoading) {
      return <Spinner />;
    }

    if (!notes || notes.length === 0) {
      return (
        <Placeholder>
          <h1>Активных заметок нет</h1>
        </Placeholder>
      );
    }

    if (isFilterActive()) {
      const active = getActive();
      if (active.length === 0) {
        return (
          <>
            <Filter />
            <Placeholder>
              <h1 style={{ wordWrap: 'break-word' }}>
                Заметок по выбранному фильтру нет
              </h1>
            </Placeholder>
          </>
        );
      }
      return (
        <>
          <Filter />
          <Notes colors={colors} notes={getActive()} />
        </>
      );
    }

    return (
      <>
        <Filter />
        <Notes colors={colors} notes={notes} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotesAction()),
});

const mapStateToProps = state => ({
  filterColors: filterColorsSelector(state),
  notes: notesSelector(state),
  colors: colorsSelector(state),
  isLoading: state.notes.isLoading,
});

NotesContainer.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  filterColors: PropTypes.arrayOf(PropTypes.object).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
