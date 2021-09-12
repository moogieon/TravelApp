import React from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS} from './BoardCard.queries';
import {useQuery} from '@apollo/client';

const data = useQuery(FETCH_BOARDS);
console.log('data : ', data);

export default function BoardCard() {
  return <BoardCardUI data={data} />;
}
