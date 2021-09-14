
import React, {useState, useContext} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE, SCRAP_BOARD } from './MyPage.queries';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(false);
  const [isShow , setIsShow] = useState(false);
  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN)
  
  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  const editOn = () => {
    setIsEdit(true)
  }
  const editOff = () => {
    setIsEdit(false)
  }
  const logOut = () => {
    setAccessToken("")
  }
  const ShowBoards = () => {
    isShow ? setIsShow(false) : setIsShow(true)
  }
  

  return <MyPageUI 
  gotoCommentAlarmPage={gotoCommentAlarmPage} 
  isEdit = {isEdit} 
  editOn={editOn} 
  editOff={editOff} 
  data = {data}
  user = {user}
  
  logOut = {logOut}
  ShowBoards = {ShowBoards}
  isShow = {isShow}
  />;
}

