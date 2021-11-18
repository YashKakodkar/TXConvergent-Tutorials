import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Navigation from "./src/Navigation";
import { Component } from "react";

// Grab config information from the Firebase Console and initialize the app
const firebaseConfig = {
  apiKey: "AIzaSyDpZCWGO2BRo6cOxpVbCE_uYSuxwS1Oc6M",
  authDomain: "twitterclonef21.firebaseapp.com",
  projectId: "twitterclonef21",
  storageBucket: "twitterclonef21.appspot.com",
  messagingSenderId: "515804614222",
  appId: "1:515804614222:web:f67d4d13b9052ef6b8fd1f",
};

const firebaseApp = initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    //Create a reference and check for the state of authentication
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
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
    return <Navigation isLoggedIn={this.state.isLoggedIn} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
