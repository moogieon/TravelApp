import React from 'react';
import {
  Button,
  Card,
  CardLeft,
  CardRight,
  ScrapButton,
  CardTitle,
  CardMiddle,
  CardMiddleLeft,
  LocationImg,
  CardMiddleText,
  CardContents,
  CardWriter,
  WriterPhoto,
  WriterName,
  ImageBox,
} from './BoardCard.styles';

export default function BoardCardUI(props: any) {
  return (
    <>
      <Card>
        <CardLeft>
          <CardTitle>알함브라 궁전 가실 분 괌</CardTitle>
          <CardMiddle>
            <CardMiddleLeft>
              <LocationImg
                source={require('../../../Assets/Images/IconLocation.png')}
              />

              <CardMiddleText>Spain, Granada</CardMiddleText>
            </CardMiddleLeft>
            <CardMiddleText>2021.09.21 ~ 2021.09.21</CardMiddleText>
          </CardMiddle>
          <CardContents>
            {/* 글 줄임 연산자 {data.substr(0, 18) + '...'} */}
            츄러스도 먹을거임
          </CardContents>
          <CardWriter>
            <WriterPhoto>
              <ImageBox
                source={require('../../../Assets/Images/IconUserPhoto.png')}
              />
            </WriterPhoto>
            <WriterName>스페인처돌이</WriterName>
          </CardWriter>
        </CardLeft>
        <CardRight>
          <Button>
            <ScrapButton
              source={require('../../../Assets/Images/IconScrap_G.png')}
              resizeMode="cover"
            />
          </Button>
        </CardRight>
      </Card>
    </>
  );
}
