import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countLabel}>{this.state.count}</Text>
        <StatusBar style="auto" />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  countLabel: {
    fontSize: 50,
    margin: 20,
  },

  buttonContainer: {
    backgroundColor: "white",
    color: "orchid",
    borderRadius: 100,
    margin: 10,
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 30,
  },
});
