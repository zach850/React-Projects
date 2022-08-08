import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <CommentDetail
        author="Zach"
        metadata="Today at 5:42pm"
        text="Hey Guys! Can you help me out with a quick question?"
        img={faker.image.avatar()}
      />
      <CommentDetail
        author="Josh"
        metadata="Today at 7:32pm"
        text="I'm available to help you!"
        img={faker.image.avatar()}
      />

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          metadata="Today at 9:42pm"
          text="Sorry, I don't know the answer"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          metadata="Today at 11:42pm"
          text="Hmmmm... let me see"
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
