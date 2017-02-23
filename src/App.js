import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDZBdA4lMRerowWreunJ7w8sMk2PE1G5AM',
      authDomain: 'manager-e037e.firebaseapp.com',
      databaseURL: 'https://manager-e037e.firebaseio.com',
      storageBucket: 'manager-e037e.appspot.com',
      messagingSenderId: '711680212799'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    
    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;