import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount () {
    const config = {
    apiKey: "AIzaSyBvCXQlCZJD_1XhfRLMTNW-pwQau3kZyuI",
    authDomain: "employees-manager-38274.firebaseapp.com",
    databaseURL: "https://employees-manager-38274.firebaseio.com",
    projectId: "employees-manager-38274",
    storageBucket: "",
    messagingSenderId: "196463608886"
    };

    firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
