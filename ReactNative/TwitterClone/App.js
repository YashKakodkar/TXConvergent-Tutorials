import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";
import Login from "./src/screens/Login/Login";

export default class App extends Component {
  render() {
    return <Navigation></Navigation>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
