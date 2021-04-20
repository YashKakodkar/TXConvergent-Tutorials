import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";
import "firebase/firestore";

export default class Posting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetBody: "",
    };
  }

  onPost = async () => {
    const { tweetBody } = this.state;
    const db = firebase.firestore();

    const userID = firebase.auth().currentUser.uid;
    var username = "";
    await db
      .collection("users")
      .doc(userID)
      .get()
      .then((doc) => {
        username = doc.data().username;
        console.log(username);
      });

    db.collection("tweets").add({
      userID: userID,
      username: username,
      tweetBody: tweetBody,
      likes: 0,
      timestamp: new Date(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(tweetBody) => this.setState({ tweetBody })}
          multiline={true}
          placeholder="What's happening?"
        ></TextInput>
        <TouchableOpacity style={styles.postButtonContainer} onPress={this.onPost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  textInput: {
    width: "100%",
    height: "30%",
    padding: 10,
    paddingTop: 20,
    fontSize: 18,
    backgroundColor: "white",
  },

  postButtonContainer: {
    backgroundColor: "#1da1f2",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  postButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
