import {
  Wrapper,
  Head,
  HeadMiddle,
  HeadRight,
  HeadText,
  Body,
  AlarmButton,
  UserView,
  IconLocation,
  LogOutIcon,
  UserImg,
  UserImgBackground,
  BodyLocation,
  BodyContents,
  BodyUserText,
  EditIcon,
  EditIcon2,
  BodyCountry,
  BodyCity,
  BodyCountryText,
  BodyCityText,
  BodyDateText,
  BodyContentsText,
  BodyCityTextInput,
  BodyCountryTextInput,
  BodyContentsTextInput,
  BoardHead,
  BoardHeadText,
  BoardBody,
  BoardHeadLine,
  LogOutBtn,
  LogOutText,
  GoToListBtn,
  Button,
} from './MyPage.styles';
import React from 'react';
import {TextInput, Text, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {Animated, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardMyPage/BoardCard.contatiner';

export default function MyPageUI(props) {
  const dropDown = require('../../../Assets/Images/IconDropDown.png');
  const dropClose = require('../../../Assets/Images/IconDropClose.png');
  const uriedit = `https://storage.googleapis.com/${props.user?.fetchUserLoggedIn?.picture}`;
  // console.log(uriedit);
  return (
    <>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>
          <Head>
            <HeadMiddle>
              <HeadText>마이페이지</HeadText>
            </HeadMiddle>
            <HeadRight>
              <>
                {!props.isEdit && (
                  <Button onPress={props.editOn}>
                    <EditIcon
                      source={require('../../../Assets/Images/IconEdit.png')}
                    />
                  </Button>
                )}
                {props.isEdit && (
                  <HeadText
                    style={{color: '#FFBE2B'}}
                    onPress={props.handleSubmit(props.editOff)}>
                    완료
                  </HeadText>
                )}
              </>
              <AlarmButton onPress={props.gotoCommentAlarmPage}>
                <EditIcon
                  source={require('../../../Assets/Images/IconAlarm.png')}
                />
              </AlarmButton>
            </HeadRight>
          </Head>
          {!props.isEdit && (
            <Body>
              {props.user?.fetchUserLoggedIn?.picture ? (
                <UserImg source={{uri: uriedit}} />
              ) : (
                <UserImg
                  source={require('../../../Assets/Images/Noimage.png')}
                />
              )}
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>

              <BodyLocation>
                <IconLocation
                  source={require('../../../Assets/Images/IconLocation.png')}
                />
                <BodyCountry>
                  <BodyCountryText>
                    {props.user?.fetchUserLoggedIn?.location?.country ||
                      'noCountry'}
                    ,{' '}
                  </BodyCountryText>
                </BodyCountry>
                <BodyCity>
                  <BodyCityText>
                    {props.user?.fetchUserLoggedIn?.location?.city || 'noCity'}
                  </BodyCityText>
                </BodyCity>
              </BodyLocation>
              <BodyContents>
                <BodyContentsText>
                  {props.user?.fetchUserLoggedIn?.contents}
                </BodyContentsText>
              </BodyContents>
            </Body>
          )}

          {props.isEdit && (
            <Body>
              <Button onPress={props.openGallery}>
                {props.imageUriGallary ? (
                  <UserImgBackground source={props.imageUriGallary} />
                ) : props.user?.fetchUserLoggedIn?.picture ? (
                  <UserImg source={{uri: uriedit}} />
                ) : (
                  <UserImg
                    source={require('../../../Assets/Images/Noimage.png')}
                  />
                )}
              </Button>
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>

              <BodyLocation>
                <BodyCountry>
                  <Controller
                    control={props.control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <BodyCountryTextInput
                        style={{color: '#000'}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'나라필수'}
                        placeholderTextColor="#bdbdbd"
                      />
                    )}
                    name="Country"
                    defaultValue={
                      props.user?.fetchUserLoggedIn?.location?.country
                    }
                  />
                </BodyCountry>

                <BodyCity>
                  <Controller
                    control={props.control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <BodyCityTextInput
                        style={{color: '#000'}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'도시필수'}
                      />
                    )}
                    name="City"
                    defaultValue={props.user?.fetchUserLoggedIn?.location?.city}
                  />
                  {/* {props.errors.City && <Text>This is required 2.</Text>} */}
                </BodyCity>
              </BodyLocation>

              <BodyContents>
                <Controller
                  control={props.control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <BodyCityTextInput
                      style={{color: '#000'}}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="내용입력해주세요"
                    />
                  )}
                  name="Contents"
                  defaultValue={props.user?.fetchUserLoggedIn?.contents}
                />
                {/* {props.errors.City && <Text>This is required 3.</Text>} */}
              </BodyContents>
              {/* <Button  onPress={props.handleSubmit(props.onSubmit)} ><Text>에디트</Text></Button> */}
            </Body>
          )}

          <BoardHead>
            {/* <Icon name={'pencil-sharp'} size={18} onPress={props.ShowBoards} /> */}
            <Button onPress={props.ShowBoards}>
              <GoToListBtn source={props.isShow ? dropClose : dropDown} />
            </Button>
            <BoardHeadText> 내가 쓴 글</BoardHeadText>
          </BoardHead>

          {props.isShow && <BoardCard navigation={props.navigation} />}

          <LogOutBtn onPress={props.logOut}>
            <LogOutText>로그아웃</LogOutText>
            <LogOutIcon
              source={require('../../../Assets/Images/IconArrowRight_G.png')}
            />
          </LogOutBtn>
        </Wrapper>
      </ScrollView>
    </>
  );
}
