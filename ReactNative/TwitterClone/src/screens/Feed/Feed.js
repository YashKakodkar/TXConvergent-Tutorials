import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import Tweet from "../../components/Feed/Tweet";
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
          profileColor: tweetData.profileColor,
          body: tweetData.tweetBody,
          likes: tweetData.likes,
          timestamp: tweetData.timestamp,
        };
        tweets.push(tweet);
      });
      this.setState({ tweets });
    });
  }

  renderTweet = ({ item }) => (
    <Tweet
      id={item.id}
      body={item.body}
      username={item.username}
      userID={item.userID}
      profileColor={item.profileColor}
      likes={item.likes}
      timestamp={item.timestamp}
    />
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
