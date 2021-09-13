import { useQuery } from '@apollo/client';
import React from 'react';
import UserPageUI from './UserPage.presenter';
import { FETCH_BOARDS_USER_WROTE } from './UserPage.queries';
// import MapView from 'react-native-maps';

export default function UserPage() {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables : {
      userId : "613dccca7c87fd0029d25b73"
      
    }
  })
  console.log(data)
  return <UserPageUI data = {data}  />;
}
