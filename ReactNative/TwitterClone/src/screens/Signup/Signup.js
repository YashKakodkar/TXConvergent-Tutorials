import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Navigation from "../../Navigation";
import firebase from "firebase";
import "firebase/firestore";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onSignup = () => {
    const { username, email, password } = this.state;
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            username,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>Twitter</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(username) => {
            this.setState({ username });
          }}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => {
            this.setState({ email });
          }}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => {
            this.setState({ password });
          }}
        ></TextInput>
        <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onSignup}>
          <Text style={styles.loginButtonText}>Sign up</Text>
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
