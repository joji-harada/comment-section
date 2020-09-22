import React from "react";
import ReactDOM from "react-dom";
import "./CommentDetail";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          <p>Are you sure you want to proceed?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          image={faker.image.avatar()}
          time="Today at 4:46PM"
          content={faker.random.words()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          image={faker.image.avatar()}
          time="Yesterday at 12:21PM"
          content={faker.random.words()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          image={faker.image.avatar()}
          time="Wednesday at 10:32AM"
          content={faker.random.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
