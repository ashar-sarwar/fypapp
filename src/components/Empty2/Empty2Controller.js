import React from 'react';
import PropTypes from 'prop-types';
import Empty2View from './Empty2View';
import {connect} from 'react-redux';

class Empty2Controller extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <Empty2View {...this.props} />;
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(Empty2Controller);
