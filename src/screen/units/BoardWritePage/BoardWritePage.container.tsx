import React, { useContext, useRef, useState } from 'react';
import { getDate } from '../../commons/libraries/getdate';
import BoardWritePageUI from './BoardWritePage.presenter';
// import MapView from 'react-native-maps';
export default function BoardWritePage() {
  const [claenderDate,setClaenderDate] =useState({startDate:'',endDate:''})
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState('Unknown');
  // const  [selectedStartDate, setSelectedStartDate ]= useState('')
  // const  [selectedEndDate, setSelectedEndDate ]= useState('')
  // const startDate  =  claenderDate.selectedStartDate ? getDate(claenderDate.selectedStartDate): '';
  // const endDate =claenderDate.selectedEndDate ? getDate(claenderDate.selectedEndDate ): '';
  
  // function onDateChange(date,type) {
  // if (type === 'END_DATE') {
  //       setSelectedEndDate(date) 
  // }else{
  //   setSelectedStartDate(date)
  //   setSelectedEndDate("")
  //   }
  // }
  return <BoardWritePageUI 
  show={show}
  setShow={setShow}
  claenderDate={claenderDate}
  setClaenderDate={setClaenderDate}
  country={country}
  setCountry={setCountry}

  />;
}
