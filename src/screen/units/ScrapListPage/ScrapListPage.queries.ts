import {gql} from '@apollo/client';

export const FETCH_BOARDS_I_SCRAPPED = gql`
  query scrapped {
    fetchBoardsIScrapped {
      _id
      title
      contents
      location {
        country
        city
      }
    }
  }
`;
export const SCRAP_BOARD = gql`
  mutation scrapboard($boardId: ID!) {
    scrapBoard(boardId: $boardId)
  }
`;
