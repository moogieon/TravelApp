

import {Wrapper, Head,HeadLeft,HeadMiddle,HeadRight,HeadText, Body,UserImg,BodyLocation,  BodyContents,
   BodyUserText,EditIcon,BodyCountry, BodyCity, BodyCountryText, BodyCityText, BodyDateText,BodyContentsText,
   BodyCityTextInput,BodyCountryTextInput,BodyContentsTextInput, BoardHead,BoardHeadText, BoardBody,
   BoardHeadLine,LogOutBtn, LogOutText, Button} from './MyPage.styles';
import React from 'react';
import {TextInput } from "react-native"
import {useForm} from 'react-hook-form'
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {
  Animated,
  ScrollView,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardMyPage/BoardCard.contatiner';


export default function MyPageUI(props) {
  return (
    <>
    
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>

        <Head>
          <HeadLeft>
          <Icon name={'chevron-back'} size={18} onPress={props.gotoCommentAlarmPage} />
          </HeadLeft>
          <HeadMiddle>
          <HeadText>마이페이지</HeadText>
          {!props.isEdit && (
              // <Icon name={'pencil-sharp'} size={18} onPress={props.editOn} />
              <Button onPress={props.editOn} >
                  <EditIcon
                  source={require('../../../Assets/Images/IconEdit.png')}
                />
              </Button>
              

            )}
            {props.isEdit && (
              <HeadText style={{color:'#FFBE2B'}}  onPress={props.editOff} >완료</HeadText>
              
            )}
          </HeadMiddle>
          <HeadRight>
            
        {/* <Icon name={'notifications-outline'} size={18} onPress={props.gotoCommentAlarmPage} /> */}
        <Button onPress={props.gotoCommentAlarmPage}>
        <EditIcon
                  source={require('../../../Assets/Images/IconAlarm.png')}
                  
                />
        </Button>
        
        
          </HeadRight>
        
        

        
        

          </Head>
          {!props.isEdit && (
            <Body>
            <UserImg source={require('../../../Assets/Images/MainAfreecaImg.png')} />
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>
              
              
              <BodyLocation>
              <Icon name={'location'} size={15} />
              <BodyCountry>
              <BodyCountryText>{props.user?.fetchUserLoggedIn?.location?.country}, </BodyCountryText>
              </BodyCountry>
              <BodyCity>
              <BodyCityText>{props.user?.fetchUserLoggedIn?.location?.city}</BodyCityText>
              </BodyCity>
              </BodyLocation>
              {/* <BodyDateText>2021.09.30~2036.09.30</BodyDateText> */}
              <BodyContents>
                <BodyContentsText>{props.user?.fetchUserLoggedIn?.contents}</BodyContentsText>
              </BodyContents>
            </Body>
          )}
          


          {props.isEdit && (
              <Body>
              <UserImg source={require('../../../Assets/Images/MainEuropeImg.png')} />
                <BodyUserText style={{color:'#FF5F2E'}}>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>
                
                <BodyLocation>
                <Icon name={'location'} size={15} style={{color:'#C8C8C8'}}/>
                <BodyCountry><BodyCountryTextInput defaultValue={props.user?.fetchUserLoggedIn?.location?.country}/></BodyCountry>
                
                <BodyCity><BodyCityTextInput defaultValue={props.user?.fetchUserLoggedIn?.location?.city} /></BodyCity>
                
                </BodyLocation>
                
                <BodyContents>
                  <BodyContentsTextInput defaultValue={props.user?.fetchUserLoggedIn?.contents}/>
                </BodyContents>
              </Body>
          )}
        
        <BoardHead>
        <Icon name={'pencil-sharp'} size={18} onPress={props.ShowBoards}/>
          <BoardHeadText>  내가 쓴 글</BoardHeadText>
          
        </BoardHead>
        <BoardHeadLine></BoardHeadLine>
        
         
          {props.isShow && (<BoardCard />)}
            <LogOutBtn onPress={props.logOut}><LogOutText>로그아웃</LogOutText></LogOutBtn>
                
      

        </Wrapper>
      </ScrollView>
    </>
  );
}
