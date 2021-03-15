import React from 'react';
import PropTypes from 'prop-types';
import SideBarView from './SideBarView';
import {connect} from 'react-redux';

class SideBarController extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static propTypes = {};
  static defaultProps = {};

  render() {
    return <SideBarView {...this.props} />;
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(SideBarController);
