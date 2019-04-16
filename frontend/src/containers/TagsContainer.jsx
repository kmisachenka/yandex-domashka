import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";

import { tagsSelector } from '../selectors';

import { Tags } from '../components';


const TagsContainer = ({ tags, allTags }) => (
  <Tags tags={tags} allTags={allTags} />
);

const mapStateToProps = state => ({
  allTags: tagsSelector(state),
});

TagsContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.number).isRequired,
  allTags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TagsContainer);
