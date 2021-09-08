
import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function UserPageUI() {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <Body><Contents>UserPage</Contents></Body>
      </Wrapper>
    </>
  );
}