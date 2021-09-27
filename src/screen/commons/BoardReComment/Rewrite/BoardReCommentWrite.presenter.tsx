import React from 'react';
import {
  CommentWritetWrapper,
  WriteBox,
  InputBox,
  Button,
  UploadBtn,
} from './BoardReCommentWrite.styles';

export default function BoardReCommentWriteUI(props: any) {
  return (
    <>
      {!props.isEdit && (
        <CommentWritetWrapper>
          <WriteBox active={props.active}>
            <InputBox
              onChangeText={text => props.onChangeInput(text)}
              placeholder={'Add Comment...'}
              placeholderTextColor="silver"
              maxLength={100}
              multiline={true}
              textAlignVertical={'top'}
            />
            <Button onPress={props.onPressSubmitRe}>
              {props.active ? (
                <UploadBtn
                  source={require('../../../../Assets/Images/IconArrowToTop_Y.png')}
                />
              ) : (
                <UploadBtn
                  source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
                />
              )}
            </Button>
          </WriteBox>
        </CommentWritetWrapper>
      )}
      {props.isEdit && (
        <CommentWritetWrapper>
          <WriteBox>
            <InputBox
              onChangeText={text => props.onChangeInput(text)}
              placeholder={'Add Comment...'}
              placeholderTextColor="silver"
              maxLength={100}
              multiline={true}
              textAlignVertical={'top'}
            />
            <Button onPress={props.onPressEditRe}>
              {props.active ? (
                <UploadBtn
                  source={require('../../../../Assets/Images/IconArrowToTop_Y.png')}
                />
              ) : (
                <UploadBtn
                  source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
                />
              )}
            </Button>
          </WriteBox>
        </CommentWritetWrapper>
      )}
    </>
  );
}
