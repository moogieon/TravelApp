import React, { useContext, useState } from 'react';
import BoardWritePageUI from './BoardWritePage.presenter';
// import MapView from 'react-native-maps';
export default function BoardWritePage() {
  const [claenderDate,setClaenderDate] =useState({startDate:'',endDate:''})
  const [show, setShow] = useState(false);

  return <BoardWritePageUI 
  show={show}
  setShow={setShow}
  claenderDate={claenderDate}
  setClaenderDate={setClaenderDate}

 
  />;
}
