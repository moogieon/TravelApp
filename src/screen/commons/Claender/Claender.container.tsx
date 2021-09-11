import React, { useState } from 'react';
import { getDate } from '../../commons/libraries/getdate';
import ClaenderUI from './Claender.presenter';

// import MapView from 'react-native-maps';
export default function Claender(props:any) {
  const  [selectedStartDate, setSelectedStartDate ]= useState('')
  const  [selectedEndDate, setSelectedEndDate ]= useState('')
  const minDate = new Date()// Today
  const maxDate = new Date(2022, 6, 3);
  const startDate  =  selectedStartDate ? getDate(selectedStartDate): '';
  const endDate = selectedEndDate ? getDate(selectedEndDate): '';

function onDateChange(date,type) {
  if (type === 'END_DATE') {
        setSelectedEndDate(date) 
  }else{
    setSelectedStartDate(date)
    setSelectedEndDate("")
  }
 props.setClaenderDate({startDate:startDate , endDate:endDate}) 

}

 

  

  


  return <ClaenderUI 
  show={props.show}
  setShow={props.setShow}
  onDateChange={onDateChange}
  minDate={minDate}
  maxDate={maxDate}
  />;
}
