import {
  Wrapper,
  Button,
  BackIcon,
  Head,
  Colum,
  Colum2,
  Colum3,
  Colum4,
  Body,
  Contents,
  Title,
  DatePick,
  ModalView,
  ButtonClose,
  Calendar,
  BodyBox,
  WorldPick,
  LocPick,
  IconImg


 
} from './BoardWritePage.styles';
import React from 'react';
import CalendarPage from '../../commons/Claender/Claender.presenter';
import CalendarPicker from 'react-native-calendar-picker';
import { Alert, Modal } from 'react-native';
import Claender from '../../commons/Claender/Claender.container';
// import MapView from 'react-native-maps';

export default function BoardWritePageUI(props:any) {
  return (
    <>
      
      <Head>
        <Button>
        <BackIcon source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
       <Colum>동행찾기 글쓰기</Colum>
       <Button><Colum2>등록</Colum2></Button>
      </Head> 
      {/* {props.show ?( */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setShow(!props.show);
        }}
      >  
      <Claender  setShow={props.setShow} 
       claenderDate={props.claenderDate}  setClaenderDate={props.setClaenderDate}
      />
              </Modal>
            <Wrapper> 
              <Body>
                <Title placeholder={"제목"}></Title>
                <DatePick onPress={()=>props.setShow(true)} >
                  <IconImg source={require("../../../Assets/Images/IconSchedule.png")}/>
                  <Colum3 startDate={props.claenderDate.startDate &&props.claenderDate.endDate } >{props.claenderDate.startDate &&props.claenderDate.endDate ?props.claenderDate.startDate + '   '+"~" +'   '+ props.claenderDate.endDate: "날짜를 선택" }</Colum3>
                </DatePick>
  
          <BodyBox>
            <WorldPick>
            <IconImg source={require("../../../Assets/Images/IconEarth.png")}/>
              <Colum3>대륙 선택</Colum3>
              </WorldPick>
            <LocPick>
            <IconImg source={require("../../../Assets/Images/IconLocationInBoard.png")}/>
              <Colum3>위치 추가</Colum3></LocPick>
            </BodyBox> 
              </Body>
              <Body>
                <Button>
                  <Contents></Contents>
                </Button>
              </Body>
            </Wrapper>
     

    </>
  );
}
