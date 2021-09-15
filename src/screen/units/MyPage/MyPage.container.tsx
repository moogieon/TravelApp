
import React, {useState, useContext, useRef} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE,UPLOAD_FILE } from './MyPage.queries';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(false);
  const [isShow , setIsShow] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState();
  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN)
  const [uploadfile] = useMutation(UPLOAD_FILE)

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
  
  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      console.log("파일이 없다고");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      console.log("파일 사이즈가 너무크니까 올리지마(제한 5MB)");
      return;
    }

    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      console.log("png또는 jpeg만 전송가능");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      setFile(file);
    };
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

