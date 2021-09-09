import {
  Wrapper,
  Head,
  HeadLeft,
  HeadMiddle,
  HeadRight,
  Body,
  UserImg,
  BodyLocation,
  Contents,
  Contents2,
  Contents3,
  BoardHead,
  BoardBody,
  List,
  ProfileImg,
  ProfileInit,
  ProfileHead,
  ProfileBody,
  Line,
  ProfileInfo,
  Name,
  Country,
  Title,
  JobTitle,
  WriteBtn,
  BodyContents,
} from './MyPage.styles';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {Animated, ScrollView} from 'react-native';
export default function MyPageUI(props) {
  return (
    <>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>
          <Head>
            <HeadLeft>
              <Icon name={'chevron-back'} size={18} />
            </HeadLeft>
            <HeadMiddle>
              <Contents>마이페이지</Contents>
            </HeadMiddle>
            <HeadRight>
              <Icon name={'pencil-sharp'} size={18} />
              <Icon name={'notifications-outline'} size={18} />
            </HeadRight>
          </Head>
          <Body>
            <UserImg
              source={require('../../../Assets/Images/IconUserPhoto.png')}
            />
            <Contents>제이미바디</Contents>
            <BodyLocation>
              <Icon name={'location'} size={15} />
              <Contents>England,</Contents>
              <Contents>Leicester City</Contents>
            </BodyLocation>
            <Contents3>2021.09.30~2036.09.30</Contents3>
            <BodyContents>
              <Contents>
                15년동안 축구하실분 구합니다. 영원히 뛰게 해드릴게요 무릎이
                작살이 나도 뛰게 해드립니다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎ
              </Contents>
            </BodyContents>
          </Body>
          <BoardHead>
            <Icon name={'pencil-sharp'} size={18} />
            <Contents2> 내가 쓴 글</Contents2>
          </BoardHead>

          <List>
            <ProfileInit>
              <ProfileHead>
                <JobTitle>asd</JobTitle>
                <Icon name={'bookmark'} color={'#d8d8d8'} size={20} />
              </ProfileHead>
              <ProfileBody>
                <Icon name={'location'} size={9} />
                <Country>tt</Country>
              </ProfileBody>
            </ProfileInit>
            <Line />
            <Title>dsfsf</Title>
            <ProfileInfo>
              <ProfileImg
                source={require('../../../Assets/Images/IconUserPhoto.png')}
              />
              <Name>sdfsdfssdf</Name>
            </ProfileInfo>
          </List>
        </Wrapper>
      </ScrollView>
    </>
  );
}
