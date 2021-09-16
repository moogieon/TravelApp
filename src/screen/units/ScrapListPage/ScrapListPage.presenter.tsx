import {
  Wrapper,
  Top,
  TopTitle,
  Bar,
  Scrap,
  ScrapImage,
  Contents,
  Title,
  Location,
  LocationIcon,
  CityName,
  Content,
  Button,
  ScrapIcon,
  Bar2
} from './ScrapListPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function ScrapListPageUI(props) {
  return (
    <>
      <Wrapper>
        <Top>
          <TopTitle>스크랩</TopTitle>
        </Top>
        <Bar></Bar>

        {props.data?.fetchBoardsIScrapped.map((data) => (
          <>
            <Scrap key={data._id}>
              <ScrapImage source={require('../../../Assets/Images/DetailPhoto.png')}></ScrapImage>

                <Contents>
                  <Title>{data.title}</Title>
                    <Location>
                      <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                      <CityName>{data?.location?.country || '없음' }, {data?.location?.city || '없음' }</CityName>
                    </Location>
                <Content>{data?.contents.substr(0, 70) + '..'}</Content>
            
                </Contents>

              <Button>
                <ScrapIcon source={require('../../../Assets/Images/IconScrap_Y.png')}></ScrapIcon>
              </Button>
            </Scrap>
            <Bar2></Bar2>
          </>
        ))}

      </Wrapper>
    </>
  );
}