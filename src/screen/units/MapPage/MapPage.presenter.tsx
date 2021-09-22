import {
  View,
  MarkView,
  Title,
  TimeAndPlace,
  Heading,
  TextRowWrapper,
  TextWrapper,
  Recruitment,
} from './MapPage.styles';
import React from 'react';
// import {Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getDate} from '../../commons/libraries/getdate';

export default function MapPageUI(props: any) {
  // console.log("data",props.data.fetchBoards)
  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          initialRegion={{
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          {props.data?.fetchBoards?.map((data, index) => {
            return data?.location?.lat ? (
              <Marker
                onPress={props.showCard(data._id)}
                key={index}
                coordinate={{
                  latitude: data?.location?.lat,
                  longitude: data?.location?.lng,
                }}
                title={data?.title}
                description="this is a marker example">
                <View>
                  <Icon name={'street-view'} size={30} color={'darkred'} />
                  {/* <ImageBackground source={data?.images[0]}/> */}
                </View>
                <Callout onPress={props.onPressCard(data._id)}>
                  <MarkView>
                    <Title>{data?.title}</Title>
                    <TextRowWrapper>
                      <Heading>시간 :</Heading>
                      <TimeAndPlace>
                        {getDate(data.startDate) + '~' + getDate(data.endDate)}
                      </TimeAndPlace>
                    </TextRowWrapper>
                    <TextRowWrapper>
                      <Heading>장소 :</Heading>
                      <TimeAndPlace>
                        {data?.location.country + ', ' + data?.location.city}
                      </TimeAndPlace>
                    </TextRowWrapper>
                    <TextRowWrapper></TextRowWrapper>
                    <TextWrapper>
                      <Recruitment>{'>'} 동행하기</Recruitment>
                    </TextWrapper>
                  </MarkView>
                </Callout>
              </Marker>
            ) : null;
          })}
        </MapView>
        <Animated.View style={props.styles.card}>
          {/* <Image
            source={props.datas?.fetchBoard.images[0]}
            style={props.styles.cardImage}
            resizeMode="cover"
          /> */}
          <View>
            <Text numberOfLines={1}>{props.datas?.fetchBoard.title}</Text>

            <Text numberOfLines={1}>{props.datas?.fetchBoard.contents}</Text>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[
                    props.styles.textSign,
                    {
                      color: '#FF6347',
                    },
                  ]}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
}
