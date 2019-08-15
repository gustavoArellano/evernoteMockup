import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');

require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4Fggr3Vujt-lroJ0gmVtRwe20p6xlerY",
    authDomain: "evernote-mockup.firebaseapp.com",
    databaseURL: "https://evernote-mockup.firebaseio.com",
    projectId: "evernote-mockup",
    storageBucket: "evernote-mockup.appspot.com",
    messagingSenderId: "956746968212",
    appId: "1:956746968212:web:30f8e19781334f76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
