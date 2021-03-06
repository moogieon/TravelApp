import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  /* height: 2000px; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const Head = styled.View`
  width: 321px;
  height: 20px;
  /* background-color: blue;  */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 43px;
`;

export const HeadLeft = styled.View`
  width: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const HeadMiddle = styled.View`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const HeadRight = styled.View`
  width: 10px;
  display: flex;

  flex-direction: row;
  justify-content: flex-end;
`;
export const EditIcon = styled.Image`
  width: 11px;
  height: 18px;
  margin-top: 3px;
`;
export const HeadText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
export const HeadTextBold = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffbe2b;
`;

export const Body = styled.View`
  width: 281px;

  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImg = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-bottom: 34px;
`;
export const BodyLocation = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 26px;
`;

export const BodyContents = styled.View`
  width: 281px;
`;

export const BodyUserText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 24px;
`;
export const BodyCountryText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;
export const BodyCityText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;
export const BodyDateText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: #bdbdbd;
`;
export const BodyContentsText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

export const BoardHead = styled.View`
  width: 330px;
  /* height : 31px; */
  margin-top: 78px;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const BoardHeadLine = styled.View`
  width: 330px;
  height: 0px;
  margin-bottom: 19px;
  border: 0.5px solid black;
`;

export const BoardHeadText = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
export const BoardHeadUserText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #ffbe2b;
`;
export const BoardHeadTextBold = styled.Text`
  font-size: 18px;
  font-weight: 900;
`;

export const Button = styled.TouchableOpacity``;

export const BoardBody = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: purple;
  width: 320px;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-top: 9.5px;
  margin-bottom: 9.5px;
  border-radius: 10px;
  elevation: 2;
`;

export const LogOutBtn = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const LogOutText = styled.Text`
  font-size: 20px;
`;
