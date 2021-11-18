import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import Navigation from "./src/Navigation";
import Login from "./src/screens/Login/Login";

const firebaseConfig = {
  apiKey: "AIzaSyAzlibCz1x_rNOTYZXXR030Z08T-iokxII",
  authDomain: "twitterclone-1f2d6.firebaseapp.com",
  projectId: "twitterclone-1f2d6",
  storageBucket: "twitterclone-1f2d6.appspot.com",
  messagingSenderId: "882125666574",
  appId: "1:882125666574:web:af41381ba0444211633f5f",
  measurementId: "G-E93YJWV6CV",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          isLoggedIn: false,
        });
      } else {
        this.setState({
          isLoggedIn: true,
        });
      }
    });
  }

  render() {
    return <Navigation isLoggedIn={false}></Navigation>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
