import { useMutation } from '@apollo/client';
import React, { useContext, useRef, useState } from 'react';
import { getDate } from '../../commons/libraries/getdate';
import BoardWritePageUI from './BoardWritePage.presenter';
import { CREATE_BOARD } from './BoardWritePage.queries';
import { useForm, Controller } from "react-hook-form";
import { Alert } from 'react-native';

// type FormData = {
//   title: string;
//   startDate:string;
//   endDate:string;
//   location:{
//     area:string;
//     country:string;
//     city:string
//   };
//   contents: string;

// };

export default function BoardWritePage() {
  const { control, handleSubmit} = useForm()
    
  const [claenderDate,setClaenderDate] =useState({startDate:'',endDate:''})
  const [show, setShow] = useState(false);
  const [map ,setMap]=useState(false)
  const [country, setCountry] = useState('Unknown');
  const [onLocationSelect,setOnLocationSelect] =useState({city:"",country:""})
  const [createBoard]=useMutation(CREATE_BOARD)
  


  const onPressRegist =async(data)=>{
    console.log(data)
    try { 
      await createBoard({
      variables:{
        createBoardInput:{
     title:data.title,
     contents:data.contents,
     startDate:claenderDate.startDate,
     endDate:claenderDate.endDate,
     location:{
       city:onLocationSelect.city,
       country:onLocationSelect.country
     }
        }
      }
    })
      Alert("good")
    } catch (error) {
      console.log(error.message)
    }
   
  }
  // console.log("주소",onLocationSelect)
  
  return <BoardWritePageUI 
  show={show}
  setShow={setShow}
  map={map}
  setMap={setMap}
  claenderDate={claenderDate}
  setClaenderDate={setClaenderDate}
  country={country}
  setCountry={setCountry}
  setOnLocationSelect={setOnLocationSelect}
  onLocationSelect={onLocationSelect}
  onPressRegist={onPressRegist}
  handleSubmit={handleSubmit}
  control={control}
 
 

  />;
}
