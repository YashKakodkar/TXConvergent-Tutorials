import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default class Feed2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "700" }}>
          Feed page 2
        </Text>
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
