import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconFont } from '@leaa/app/src/components/IconFont';

import { ArticleItemScreen } from '@leaa/app/src/screens/Article/ArticleItemScreen/ArticleItemScreen';
import { ArticleListScreen } from '@leaa/app/src/screens/Article/ArticleListScreen/ArticleListScreen';
import { LoginScreen } from '@leaa/app/src/screens/Auth/LoginScreen/LoginScreen';
import { SignupScreen } from '@leaa/app/src/screens/Auth/SignupScreen/SignupScreen';
import { KeepScreen } from '@leaa/app/src/screens/Playground/KeepScreen/KeepScreen';
import { HomeScreen } from '@leaa/app/src/screens/Home/HomeScreen/HomeScreen';
import { AccountScreen } from '@leaa/app/src/screens/Account/AccountScreen/AccountScreen';

interface IScreenOptionProps {
  tintColor: string;
}

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator mode="modal">
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ header: null }} />
    <HomeStack.Screen name="Keep" component={KeepScreen} />
  </HomeStack.Navigator>
);

const ArticleStack = createStackNavigator();
export const ArticleStackScreen = () => (
  <ArticleStack.Navigator>
    <ArticleStack.Screen name="ArticleList" component={ArticleListScreen} />
    <ArticleStack.Screen name="ArticleItem" component={ArticleItemScreen} />
  </ArticleStack.Navigator>
);

const AccountStack = createStackNavigator();
export const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} />
  </AccountStack.Navigator>
);

const TabNavigator = createBottomTabNavigator();

export const AppStackScreen = () => (
  <TabNavigator.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 10,
      },
      tabStyle: {
        paddingVertical: 4,
      },
      activeTintColor: '#6a3cff',
      inactiveTintColor: '#aaa',
    }}
    initialRouteName="Account"
  >
    <TabNavigator.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }: IScreenOptionProps) => (
          <IconFont name="shouye" size={18} style={{ color: tintColor }} />
        ),
      }}
    />
    <TabNavigator.Screen
      name="Article"
      component={ArticleListScreen}
      options={{
        tabBarLabel: '文章',
        tabBarIcon: ({ tintColor }: IScreenOptionProps) => (
          <IconFont name="wenzhang" size={18} style={{ color: tintColor }} />
        ),
      }}
    />
    <TabNavigator.Screen
      name="Account"
      component={AccountStackScreen}
      options={{
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }: IScreenOptionProps) => (
          <IconFont name="shouye" size={18} style={{ color: tintColor }} />
        ),
      }}
    />
  </TabNavigator.Navigator>
);

const RootStack = createStackNavigator();

export const AppContainer = () => (
  <NavigationNativeContainer>
    <RootStack.Navigator initialRouteName="AppStack">
      <RootStack.Screen name="AppStack" component={AppStackScreen} options={{ header: null }} />
      <RootStack.Screen name="AuthStack" component={AuthStackScreen} options={{ header: null }} />
      <RootStack.Screen name="ArticleItem" component={ArticleItemScreen} />
    </RootStack.Navigator>
  </NavigationNativeContainer>
);
