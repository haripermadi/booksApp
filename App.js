/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Home from './src/screens/Home/index'
import AddScreen from './src/screens/AddScreen/index'
import {Router,Scene} from 'react-native-router-flux'
import {Provider} from 'react-redux'
import store from './src/store/index'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key='root' hideNavBar={true}>
        <Scene key="home"
          component={Home}
          initial
          />
        <Scene key="addScreen"
          component={AddScreen}
          />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
