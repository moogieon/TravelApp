
import React from "react"
import {  ScrollView } from "react-native"
import {  Button,
    CardWrap,
    Card,
    CardLeft,
    CardRight,
    ScrapButton,
    CardTitle,
    CardMiddle,
    CardMiddleContents,
    LocationImg,
    CardMiddleText,
    CardWriter,
    WriterPhoto,
    WriterName,
    ImageBox,} from './Search.styles'

export default function SearchDropDown(props:any){
 console.log('검색데이터 이거 찐' ,props.data?.fetchBoards)
 const goToBoardDetail = id => () => {
    props.navigation.push('BoardDetailPage', {id: id});
  };
 const scrapBtn = () => {};
          return (
            <ScrollView>
                {props.data?.fetchBoards.map((data : any, index : any)=>(
                    <Card key={index} id={data._id}>
                        <CardLeft 
                        onPress={goToBoardDetail(data._id)}
                        >
                        <CardTitle>{data.title.substr(0, 40) + '..'}
                        </CardTitle>
                        <CardMiddle>
                            <LocationImg
                            source={require('../../../Assets/Images/IconLocation.png')}
                            />
                            <CardMiddleContents>
                            <CardMiddleText>
                                {data.location?.area}
                                {', '}
                                {data.location?.country}
                                {', '}
                                {data.location?.city}
                            </CardMiddleText>
                            <CardMiddleText>
                                {data.startDate.substr(0, 10)}{' ~ '}
                                {data.endDate.substr(0, 10)}
                            </CardMiddleText>
                            </CardMiddleContents>
                        </CardMiddle>
                        <CardWriter>
                            <WriterPhoto>
                            <ImageBox
                                source={require('../../../Assets/Images/IconUserPhoto.png')}
                            />
                            </WriterPhoto>
                            <WriterName>{data.writer.name}</WriterName>
                        </CardWriter>
                        </CardLeft>
                        <CardRight>
                  <Button onPress={scrapBtn}>
                    <ScrapButton
                      source={require('../../../Assets/Images/IconScrap_G.png')}
                      resizeMode="cover"
                    />
                  </Button>
                </CardRight>
                    </Card>
                 ))}
            </ScrollView>
          );




       
    
}