import React, {Component} from 'react';
import {Text, TextInput, Appearance} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/CreateStore';
import NavigationRoute from './src/NavigationRoute';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

class App extends Component {
  constructor() {
    super();

    this.state = {
      store: store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={persistor}>
          <NavigationRoute />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
