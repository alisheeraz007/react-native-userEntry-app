/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderMultipleIconExample from './Components/header';
import { Provider } from 'react-redux';
import store from './store';
import FloatingLabelExample from './Components/inputs'
import { Router, Stack, Scene } from 'react-native-router-flux';
import ListItemSelectedExample from './Components/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    }
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Stack navigationBarStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }} titleStyle={{ color: "white", textAlign: "center", }}>
              <Scene key="userForm" component={FloatingLabelExample} title="User Entry Form" init />
              <Scene
                key="list"
                component={ListItemSelectedExample}
                title="User List"
                tintColor='white'
              />
              <Scene
                key="edit"
                component={FloatingLabelExample}
                title="Edit Form"
                tintColor='white'
              />
            </Stack>
          </Router>
        </Provider>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
