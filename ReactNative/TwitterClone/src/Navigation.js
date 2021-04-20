import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//import screens
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Feed from "./screens/Feed/Feed";
import FeedTwo from "./screens/Feed/FeedTwo";
import Posting from "./screens/Posting/Posting";
import Profile from "./screens/Profile/Profile";

const AuthStack = createStackNavigator();
const FeedStack = createStackNavigator();
const PostingStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.AuthNavigation = this.AuthNavigation.bind(this);
    this.FeedNavigation = this.FeedNavigation.bind(this);
    this.PostingNavigation = this.PostingNavigation.bind(this);
    this.ProfileNavigation = this.ProfileNavigation.bind(this);
  }

  AuthNavigation = (props) => {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="Login">
          {(props) => <Login {...props} />}
        </AuthStack.Screen>
        <AuthStack.Screen name="Signup">
          {(props) => <Signup {...props} />}
        </AuthStack.Screen>
        <AuthStack.Screen
          {...(props) => <TabNavigation {...props} />}
          name="Home"
          component={this.TabNavigation}
        ></AuthStack.Screen>
      </AuthStack.Navigator>
    );
  };

  FeedNavigation = (props) => {
    return (
      <FeedStack.Navigator initialRouteName="Feed">
        <FeedStack.Screen name="Feed" component={Feed} />
        <FeedStack.Screen name="FeedTwo" component={FeedTwo} />
      </FeedStack.Navigator>
    );
  };

  PostingNavigation = (props) => {
    return (
      <PostingStack.Navigator initialRouteName="Posting">
        <PostingStack.Screen name="Posting" component={Posting} />
      </PostingStack.Navigator>
    );
  };

  ProfileNavigation = (props) => {
    return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
    );
  };

  TabNavigation = (props) => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          {...(props) => <FeedNavigation {...props} />}
          name="Feed"
          component={this.FeedNavigation}
        />
        <Tab.Screen
          {...(props) => <PostingNavigation {...props} />}
          name="Post"
          component={this.PostingNavigation}
        />
        <Tab.Screen
          {...(props) => <ProfileNavigation {...props} />}
          name="Profile"
          component={this.ProfileNavigation}
        />
      </Tab.Navigator>
    );
  };

  render() {
    console.log(`logout: ${this.props.isLoggedIn}`);
    return (
      <NavigationContainer>
        {this.props.isLoggedIn ? (
          <this.TabNavigation> </this.TabNavigation>
        ) : (
          <this.AuthNavigation></this.AuthNavigation>
        )}
      </NavigationContainer>
    );
  }
}
