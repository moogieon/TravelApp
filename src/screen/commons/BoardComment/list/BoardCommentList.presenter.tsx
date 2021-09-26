import React from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import BoardCommentWrite from '../write/BoardCommentWrite.container';
import CommentListItemUI from './BoardCommentList.presenterItem';
import {
  Body,
  Wrap,
  CommentPageHeader,
  GoToBackBtn,
  GoToBack,
  TitleBox,
  CommentTitle,
  BoardCommentWrapper,
} from './BoardCommentList.styles';

export default function BoardCommentListUI(props: any) {
  return (
    <Body>
      <ScrollView horizontal={false}>
        <Wrap>
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
            {props.data?.fetchComments.map((data: any) => (
              <CommentListItemUI
                navigation={props.navigation}
                data={data}
                key={data._id}
                boardId={props.boardId}
              />
            ))}
          </BoardCommentWrapper>
        </Wrap>
        {/* //! -- Write  -- */}
      </ScrollView>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={200}>
        <View>
          <BoardCommentWrite boardId={props.boardId} />
        </View>
      </KeyboardAvoidingView>
    </Body>
  );
}
