import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
  }

  onSignup = () => {
    // Grab inputted user credentials from state
    const { username, email, password } = this.state;

    // List of colors that'll be randomly set to serve as display picture
    var profileColors = [
      "brown",
      "coral",
      "crimson",
      "blueviolet",
      "gold",
      "forestgreen",
    ];
    const profileColor = profileColors[Math.floor(Math.random() * profileColors.length)];

    // Grab auth and data base references
    const auth = getAuth();
    const db = getFirestore();

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Set a document with the specified user credential taken from auth
        setDoc(doc(db, "users", userCredential.user.uid), {
          username,
          email,
          profileColor,
        }).then((result) => {
          console.log(result);
        });
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
        <TouchableOpacity style={styles.signUpButtonContainer} onPress={this.onSignup}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
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
    width: "100%",
  },

  signUpButtonContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  signUpButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1da1f2",
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

export default SignupScreen;
