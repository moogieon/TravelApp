import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function UserPageUI(props) {
  return (
    <>
      <Head />
      <Wrapper>
        <Body>
          <Contents>UserPage</Contents>
          {props.data?.fetchBoardsUserWrote.map((data) =>(
        <Contents key={data._id}>
        <Contents>{data._id}</Contents>
        <Contents>{data.title}</Contents>
        <Contents>{data.location.country}</Contents>
        </Contents>
      ))}
        </Body>
      </Wrapper>
    </>
  );
}
