import {gql} from 'apollo-boost';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $Search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      title
      contents
      images
      pickedCount
      location {
        _id
        area
        country
        city
        lat
        lng
        createdAt
      }
      writer {
        _id
        email
        name
        picture
      }
      startDate
      endDate
    }
  }
`;
