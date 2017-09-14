import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDyEDN6G7jCnFHq41MUFwFTtvVmaxE0DOU',
            authDomain: 'manager-bc313.firebaseapp.com',
            databaseURL: 'https://manager-bc313.firebaseio.com',
            projectId: 'manager-bc313',
            storageBucket: 'manager-bc313.appspot.com',
            messagingSenderId: '725651357194'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
