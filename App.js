/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header'
import Home from './src/screens/Home/index'
import AddScreen from './src/screens/AddScreen/index'
import {Router,Scene} from 'react-native-router-flux'

const App = () => {
  return (
    <Router>
      <Scene key='root'>
      <Scene key="home"
        component={Home}
        title="My Book List"
        initial
      />
      <Scene key="addScreen"
        component={AddScreen}
        title="Add"
      />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
