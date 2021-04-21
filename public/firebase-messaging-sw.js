  
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

// import firebase from 'firebase/app';
// import "firebase/firestore";
// import "firebase/auth";
// import 'firebase/messaging'
// require("dotenv").config();//allow usage of .env file

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyDqgvnYkiiEHGvY8z_ykQSiuImMNrO7TTY",
    authDomain: "signal-sdp.firebaseapp.com",
    projectId: "signal-sdp",
    storageBucket: "signal-sdp.appspot.com",
    messagingSenderId: "454115237023",
    appId: "1:454115237023:web:0c63736a5d42234f2396aa"
    
})

const initMessaging = firebase.messaging()