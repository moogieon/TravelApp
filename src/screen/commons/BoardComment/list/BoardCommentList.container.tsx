import React from 'react';
import {useQuery} from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {FETCH_COMMENTS} from './BoardCommentList.queries';

export default function BoardCommentList({route}) {
  const {data} = useQuery(FETCH_COMMENTS, {
    variables: {
      // boardId: route?.params?._id,
      boardId: '614492dcda0ecc002ae98632',
    },
  });
  console.log('댓글 데이터 : ', data);

  return <BoardCommentListUI data={data} />;
}
