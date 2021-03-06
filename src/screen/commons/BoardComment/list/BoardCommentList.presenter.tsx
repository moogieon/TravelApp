import React from 'react';
import {ScrollView} from 'react-native';
import BoardCommentWrite from '../write/BoardCommentWrite.container';
import CommentListItemUI from './BoardCommentList.presenterItem';
import {
  Body,
  CommentPageHeader,
  GoToBackBtn,
  GoToBack,
  TitleBox,
  CommentTitle,
  BoardCommentWrapper,
} from './BoardCommentList.styles';

export default function BoardCommentListUI(props: any) {
  return (
    <>
      <ScrollView horizontal={false}>
        <Body>
          {/* //! -- Header -- */}
          <CommentPageHeader>
            <GoToBackBtn onPress={() => props.navigation.goBack(null)}>
              <GoToBack
                source={require('../../../../Assets/Images/GoToBack_B.png')}
              />
            </GoToBackBtn>
            <TitleBox>
              <CommentTitle>댓글</CommentTitle>
            </TitleBox>
          </CommentPageHeader>

          {/* //! -- Contents - Comment  -- */}

          <BoardCommentWrapper>
            {props.data?.fetchComments
              .slice(0)
              .reverse()
              .map((data: any) => (
                <CommentListItemUI
                  navigation={props.navigation}
                  data={data}
                  key={data._id}
                  boardId={props.boardId}
                  isWriteOpen={props.isWriteOpen}
                  setIsWriteOpen={props.setIsWriteOpen}
                />
              ))}
          </BoardCommentWrapper>

          {/* //! -- Write  -- */}
        </Body>
      </ScrollView>
      {props.isWriteOpen && <BoardCommentWrite boardId={props.boardId} />}
    </>
  );
}
