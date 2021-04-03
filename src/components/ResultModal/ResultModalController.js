import React from 'react';
import PropTypes from 'prop-types';
import ResultModalView from './ResultModalView';
import {connect} from 'react-redux';

class ResultModalController extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <ResultModalView {...this.props} />;
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(ResultModalController);
