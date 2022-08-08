import React from 'react'
import { Comment } from "semantic-ui-react";


export default function CommentDetail(props) {


    return (
      <Comment>
        <Comment.Avatar src={props.img} />
        <Comment.Content>
          <Comment.Author as="a">{props.author}</Comment.Author>
          <Comment.Metadata>
            <div>{props.metadata}</div>
          </Comment.Metadata>
          <Comment.Text>
            {props.text}
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
}