import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
          <Router />
      </Provider>
    );
  }
}

export default App;