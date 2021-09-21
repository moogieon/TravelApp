import styled from '@emotion/native';
export const Button = styled.TouchableOpacity``;

export const SearchImgBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
export const SearchBox = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: center;
background-color: #000;
  margin-bottom: 10px;
`;
export const GoToBack = styled.Image`
  width: 11px;
  height: 18px;
  margin-right: 20px;
`;
// export const SearchContents = styled.View`
//   width: 91%;
//   height: 100%;
//   border-bottom-width: 0.7px;
//   border-bottom-color: #fff;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;
export const SearchInput = styled.TextInput`
   width: 91%;
   height: 100%;
   border-bottom-width: 0.7px;
   border-bottom-color: #fff;
  /* border: 1px lime; */
  padding: 15px;
  padding-left: 10px;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  ::placeholder {
    line-height: 20px;
    font-size: 15px;
  }
`;
export const SearchIcon = styled.Image`
width: 24px;
height: 24px;
`


export const SearchDropDown = styled.View`
  width: 100%;
  /* height: 50px; */
  border: 1px lime;
  ;
`