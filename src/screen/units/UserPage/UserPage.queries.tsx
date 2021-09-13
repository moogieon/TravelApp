import {gql} from '@apollo/client'


export const FETCH_BOARDS_USER_WROTE = gql`
query fetchboardsuserwrote($userId: ID! ) {
    fetchBoardsUserWrote(userId: $userId) { 
    _id
    title
    contents
    startDate
    endDate
    location{
        area
        country
        city
    }

  }
}
`