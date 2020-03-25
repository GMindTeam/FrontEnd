import React, { useState } from "react";
import { ResponseTable } from "../../components";
import { Container, Button, Title } from "./style";

function CreateResponse(props) {
  const [name, setName] = useState('');
  // const [options, setOptions] = useState('');
  const [comment, setComment] = useState('');

  function validateName() {
    if (name === "") {
      document.getElementById("warningName").style.display = "inline";
    } else {
      document.getElementById("warningName").style.display = "none";
    }
  }
  function validateComment() {
    if (comment === "") {
      document.getElementById("warningComment").style.display = "inline";
    } else {
      document.getElementById("warningComment").style.display = "none";
    }
  }
  function handleChangeName(e) {
    setName(e);
  }

  function handleChangeComment(e) {
    setComment(e);
  }
  function handleSubmitButton() {
    if (comment !== "" && name !== "") {
      alert("Create response successfully!!!");
    } else {
      validateComment();
      validateName();
      alert("Don't let input empty");
    }
  }

  return (
    <Container>
      <Title>
        <h3>Create Response</h3>
      </Title>
      <div className="text-input">
        <label className="text">Your Name</label>
        <input
          className="content"
          id="name"
          onChange={handleChangeName}
          onBlur={validateName}
          value={name}
          required
        />
        <label id="warningName">Please type your name</label>
      </div>
      <div className="table">
        <label className="text">Options</label>
        <ResponseTable />
        <label id="warningOption">Please type options</label>
      </div>
      <div className="text-input">
        <label className="text">Comment</label>
        <input
          className="content"
          id="comment"
          onChange={handleChangeComment}
          onBlur={validateComment}
          value={comment}
          required
        />
        <label id="warningComment">Please type comment</label>
      </div>
      <div className="groupButton">
        <Button
          className="subButton"
          type="submit"
          onClick={handleSubmitButton}
        >
          Submit
          </Button>
      </div>
    </Container>
  );
}

export default CreateResponse;
