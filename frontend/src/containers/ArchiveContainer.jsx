import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import {
  filterColorsSelector,
  colorsSelector,
  tagsSelector,
  notesSelector,
} from '../selectors';

import { Notes, Placeholder, Spinner, Label } from '../components';
import { fetchArchive as fetchArchiveAction } from '../actions';

class ArchiveContainer extends React.Component {
  componentDidMount() {
    const { fetchArchive } = this.props;
    fetchArchive();
  }

  render() {
    const { notes, colors, filterColors, isLoading } = this.props;

    if (isLoading || !notes || notes.length === 0) {
      return <Spinner />;
    }

    if (!notes || notes.length === 0) {
      return (
        <Placeholder>
          <h1>Архив пуст</h1>
        </Placeholder>
      );
    }
    return (
      <>
        <Label label="Архив" />
        <Notes colors={colors} notes={notes} activeColors={filterColors} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArchive: () => dispatch(fetchArchiveAction()),
});

const mapStateToProps = state => ({
  filterColors: filterColorsSelector(state),
  notes: notesSelector(state),
  colors: colorsSelector(state),
  tags: tagsSelector(state),
  isLoading: state.notes.isLoading,
});

ArchiveContainer.propTypes = {
  fetchArchive: PropTypes.func.isRequired,
  filterColors: PropTypes.arrayOf(PropTypes.object).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchiveContainer);
