import {
  Colum4,
  ModalView,
  ButtonClose,
  Calendar,
 


 
} from './Caleander.styles';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { Alert, Modal } from 'react-native';


export default function ClaenderUI(props:any) {
  return (
    <>
      

            <Calendar>
              <ModalView>
         
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={props.minDate}
              maxDate={props.maxDate}
              weekdays={['일', '월','화','수','목','금','토']}
              todayBackgroundColor="#ffbf2b87"
              selectedDayColor="#FFBE2B"
              selectedDayTextColor="black"
              onDateChange={props.onDateChange}
              />
             <ButtonClose onPress={()=>props.setShow(false)}>
                <Colum4>
                   확인
                </Colum4>
              </ButtonClose>
              </ModalView>
              </Calendar>
              
           
          
    </>
  );
}
