import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  render() {
    const { username, body, likes, timestamp, profileColor } = this.props;
    console.log(timestamp.toDate().toString());
    return (
      <View style={styles.container}>
        <View
          style={{
            borderRadius: 100,
            width: 45,
            height: 45,
            backgroundColor: profileColor,
            marginRight: 10,
          }}
        />
        <View>
          <View style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ color: "black", fontWeight: "bold", marginRight: 5 }}>
              {username}
            </Text>
            <Text style={{ color: "grey" }}>
              {timestamp.toDate().toLocaleDateString()}
            </Text>
          </View>
          <Text style={{ marginBottom: 5 }}>{body}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 5 }}
              onPress={() => {
                this.setState((prevState) => ({ isLiked: !prevState.isLiked }));
              }}
            >
              {this.state.isLiked ? (
                <Icon name="heart" size="20" color="crimson" />
              ) : (
                <Icon name="heart-outline" size="20" color="grey" />
              )}
            </TouchableOpacity>
            <Text style={{ color: "grey", alignSelf: "center" }}>{likes}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
});
