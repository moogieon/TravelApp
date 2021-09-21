import {
  SearchImgBack,
  SearchBox,
  Button,
  GoToBack,
  // SearchIcon,
  // SearchContents,
  SearchInput,
  // SearchDropDown,
} from './Search.styles';
import { Text } from 'react-native';
import React, { useState } from 'react';
import {gql, useQuery} from '@apollo/client';
import SearchDropDown from './SearchDropDown';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      contents
      location {
        _id
        area
        country
      }
      writer {
        _id
        name
      }
      startDate
      endDate
    }
  }
`;

export default function Search(props : any) {
//   const [keyword, setKeyword] = useState('')
//   const [search, setSearch] = useState('')
//   const onChangeSearch = text =>{
//   setSearch(text)
// }
// const onClickSearch = () => {
//   props.refetch({search: props.search})
//   setKeyword(search)
// }
// console.log('검색 데이터 : ', props.data)
// const [dataSource] = useState(['apple' , 'banana', 'airplane', 'cow', 'zee', 'dex', 'bottle'])
const {data} = useQuery(FETCH_BOARDS)
// const [data] = useState(['apple' , 'banana', 'airplane', 'cow', 'zee', 'dex', 'bottle'])

const [filtered, setFiltered] = useState('')
const [isSearching, setIsSearching] = useState(false)
const onSearch = (text) => {
  if(text){
      setIsSearching(true)
      // const temp = text.toLowerCase()

      // const tempList = data.filter(item=>{
      //   if(item.match(temp))
      //   return item
      // })
      // setFiltered(tempList)
  } else {
    setIsSearching(false)
    setFiltered(data)
  }
}


  return (
    <SearchImgBack
      source={require('../../../Assets/Images/SearchEuropeImg.png')}
      resizeMode="cover"
    >
      <SearchBox>
        <Button>
          <GoToBack source={require('../../../Assets/Images/GoToBack_W.png')} />
        </Button>

        {/* <SearchContents> */}
          <SearchInput
          // value ={keyword}
            type="text"
            placeholder="검색어를 입력해주세요."
            placeholderTextColor="#cacaca"
            maxLength={40}
            autoCorrect={false}
            returnKeyType={'search'}
            onChangeText={onSearch}
          />


          {/* <Button
            // onPress={onClickSearch}
          >
          <SearchIcon source={require('../../../Assets/Images/IconSearch.png')} />
          </Button>  */}
        {/* </SearchContents>  */}
      </SearchBox>

      <Text style={{color:'lime' , textAlign:'center'}}>List Of Data</Text>

      {isSearching && 
         <SearchDropDown data={filtered}/>
      }

    </SearchImgBack>
  );
}
