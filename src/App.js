import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


firebase.initializeApp({
  apiKey: "AIzaSyCtLJzVyITIJYoAEPGr0QLIW6543R_lyRk",
  authDomain: "jing-chat.firebaseapp.com",
  projectId: "jing-chat",
  storageBucket: "jing-chat.appspot.com",
  messagingSenderId: "761884465848",
  appId: "1:761884465848:web:cbe70ea645bf9f8a78f24d",
  measurementId: "G-5HJTE9009D"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
