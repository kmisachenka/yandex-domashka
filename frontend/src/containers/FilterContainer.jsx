import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { filterColorsSelector, colorsSelector } from '../selectors';

import { Filter } from '../components';

import { toggleColor as toggleColorAction } from '../actions';

const FilterContainer = ({ colors, activeColors, toggleColor }) => (
  <Filter
    colors={colors}
    activeColors={activeColors}
    toggleColor={toggleColor}
  />
);

const mapStateToProps = state => ({
  colors: colorsSelector(state),
  activeColors: filterColorsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  toggleColor: id => dispatch(toggleColorAction(id)),
});

FilterContainer.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeColors: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleColor: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer);
