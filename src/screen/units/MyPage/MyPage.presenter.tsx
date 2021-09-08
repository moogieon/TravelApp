
import {Wrapper, Head, Body, Contents} from './MyPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function MyPageUI() {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <Body><Contents>myPage</Contents></Body>
      </Wrapper>
    </>
  );
}