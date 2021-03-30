import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Navigation from "../../Navigation";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>Twitter</Text>
        <TextInput style={styles.textInput} placeholder="Username"></TextInput>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtonContainer}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1da1f2",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1da1f2",
  },

  signupButtonContainer: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  signupButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },

  textInput: {
    width: 250,
    height: 40,
    margin: 10,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
