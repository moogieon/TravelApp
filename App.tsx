/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import React, {useState} from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Tabs from './src/navigations/tabs';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery,useMutation, gql } from '@apollo/client';
declare const global: {HermesInternal: null | {}};
<<<<<<< HEAD

// Initialize Apollo Client

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
=======
const client = new ApolloClient({
  uri: 'http://35.222.217.201:4000/graphql',
  cache: new InMemoryCache()
});
export const LOGIN_USER_WITH_FIREBASE = gql`
  mutation loginUserwithFB($name: String!, $email: String!) {
    loginUserWithFB(name: $name, email: $email) {
      accessToken
    }
  }
`;
const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      </ApolloProvider>
    </>
>>>>>>> fdb08aff7aa9c3168985ac593801c6a343234687
  );
};

export default App;
