import React from 'react';
import PropTypes from 'prop-types';
import OurMissionView from './OurMissionView';
import {connect} from 'react-redux';

class OurMissionController extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <OurMissionView {...this.props} />;
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(OurMissionController);
