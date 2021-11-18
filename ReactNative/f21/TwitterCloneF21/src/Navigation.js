import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

//import screens
import LoginScreen from "./screens/Login/LoginScreen";
import SignupScreen from "./screens/Signup/SignupScreen";
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
          {(props) => <LoginScreen {...props} />}
        </AuthStack.Screen>
        <AuthStack.Screen name="Signup">
          {(props) => <SignupScreen {...props} />}
        </AuthStack.Screen>
      </AuthStack.Navigator>
    );
  };

  FeedNavigation = (props) => {
    return (
      <FeedStack.Navigator initialRouteName="Feed">
        <FeedStack.Screen name="Feed">{(props) => <Feed {...props} />}</FeedStack.Screen>
        <FeedStack.Screen name="FeedTwo">
          {(props) => <FeedTwo {...props} />}
        </FeedStack.Screen>
      </FeedStack.Navigator>
    );
  };

  PostingNavigation = (props) => {
    return (
      <PostingStack.Navigator initialRouteName="Posting">
        <PostingStack.Screen name="Posting">
          {(props) => <Posting {...props} />}
        </PostingStack.Screen>
      </PostingStack.Navigator>
    );
  };

  ProfileNavigation = (props) => {
    return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile">
          {(props) => <Profile {...props} />}
        </ProfileStack.Screen>
      </ProfileStack.Navigator>
    );
  };

  TabNavigation = (props) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Post") {
              iconName = focused ? "send" : "send-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1da1f2",
          inactiveTintColor: "gray",
        }}
      >
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
