import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  onLogout = () => {
    firebase.auth().signOut();
    console.log(`logout: ${this.props.isLoggedIn}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "700" }}>
          Profile page
        </Text>
        <TouchableOpacity style={styles.logoutButtonContainer} onPress={this.onLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutButtonContainer: {
    backgroundColor: "red",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  logoutButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
