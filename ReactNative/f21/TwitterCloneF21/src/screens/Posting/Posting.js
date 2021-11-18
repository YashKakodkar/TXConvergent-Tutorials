import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, addDoc, getDoc, collection } from "firebase/firestore";

export default class Posting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetBody: "",
    };
  }

  onPost = async () => {
    const { tweetBody } = this.state;

    // Make service references
    const db = getFirestore();
    const auth = getAuth();
    const userID = auth.currentUser.uid;
    var username = "";
    var profileColor = "lightgrey";
    const userDoc = await getDoc(doc(db, "users", userID));
    if (userDoc.exists) {
      username = userDoc.data().username;
      profileColor = userDoc.data().profileColor;
    }

    // Add a doc to the db
    addDoc(collection(db, "tweets"), {
      userID: userID,
      username: username,
      profileColor: profileColor,
      tweetBody: tweetBody,
      likes: 0,
      timestamp: new Date(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={styles.textInput}
            onChangeText={(tweetBody) => this.setState({ tweetBody })}
            multiline={true}
            placeholder="What's happening?"
          ></TextInput>
          <Text style={{ marginLeft: 10, marginBottom: 10, color: "grey", fontSize: 15 }}>
            {280 - this.state.tweetBody.length}
          </Text>
        </View>
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
