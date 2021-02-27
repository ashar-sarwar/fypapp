// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRegistry, View } from "react-native";
import { MessageBar } from "./components";
import configureStore from "./store";
import AppNavigator from "./navigator";
import applyConfigSettings from "./config";
import AppStyles from "./theme/AppStyles";

const reducers = require("./reducers").default;

applyConfigSettings();

export default class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this._loadingCompleted();
      this.setState({ isLoading: false });
    })
  };

  _loadingCompleted() {
    //  DataHandler.setStore(this.state.store);
  }

  componentDidMount() {}

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <View style={AppStyles.flex}>
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
        <MessageBar />
      </View>
    );
  }
}

AppRegistry.registerComponent("AutoConnect", () => App);
