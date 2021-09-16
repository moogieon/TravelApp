
import React, {useState, useContext, useRef} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import {useForm} from 'react-hook-form'
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE,UPLOAD_FILE, UPDATE_USER } from './MyPage.queries';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(false);
  const [isShow , setIsShow] = useState(false);

  const fileRef1 = useRef<HTMLInputElement>(null);
  

  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  const {data: user, refetch} = useQuery(FETCH_USER_LOGGED_IN)
  const [uploadfile] = useMutation(UPLOAD_FILE)
  const [updateuser] = useMutation(UPDATE_USER)
  const { control, handleSubmit, formState: { errors } } = useForm();
  const aaa = '../../../Assets/Images/MainAfreecaImg.png'
  

  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  const editOn = () => {
    setIsEdit(true)
  }
  const editOff = async (data) => {
    console.log(data)
    try{
      // const resultFiles = await uploadfile({variables: {bbb : file1}})
      const picture = 'file:///data/user/0/com.first7/cache/rn_image_pick…lib_temp_cedab39d-3e87-4c67-93d9-78765ea601f3.jpg';
      await updateuser({
        variables : {
          updateUserInput : {
            contents : data.Contents,
            // picture : picture,
            location : {
              area : "유럽",
              country: data.Country,
              city : data.City,
              
            }
          }
        },
        refetchQueries: [
          {query : FETCH_USER_LOGGED_IN}
        ],
      })
    }catch(error){
      console.log(error.message)
    }
    
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
  control = {control}
  errors = {errors}
  handleSubmit = {handleSubmit}
  
  


  />;
}

