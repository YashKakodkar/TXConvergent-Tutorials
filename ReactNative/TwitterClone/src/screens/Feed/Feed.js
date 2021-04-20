import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import firebase from "firebase";
import "firebase/firestore";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    const tweetsRef = firebase.firestore().collection("tweets");
    tweetsRef.orderBy("timestamp", "desc").onSnapshot((querySnapshot) => {
      var tweets = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var tweetData = doc.data();
        var tweet = {
          id: doc.id,
          username: tweetData.username,
          userID: tweetData.userID,
          body: tweetData.tweetBody,
          likes: tweetData.likes,
          data: tweetData.timestamp,
        };
        tweets.push(tweet);
      });
      this.setState({ tweets });
    });
  }

  renderTweet = ({ item }) => (
    <View style={{ width: "100%", marginBottom: 10, backgroundColor: "lightgrey" }}>
      <Text style={{ color: "black", fontWeight: "bold" }}>{item.username}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.tweets}
          renderItem={this.renderTweet}
        ></FlatList>
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
});
