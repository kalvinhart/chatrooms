import { MessageInputWrapper } from "./MessageInput.styles";
import { Form, FormGroup, Label, Input } from "../../../common/styles/formStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { Message } from "../types/Message";
import React, { useState } from "react";

type Props = {
  send: (message: Pick<Message, "text">) => void;
};
const MessageInput = ({ send }: Props) => {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (messageText === "") return;

    console.log("Sending message: ", messageText);
    send({
      text: messageText,
    });
  };

  return (
    <MessageInputWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="messageText">Message:</Label>
          <Input
            type="text"
            id="messageText"
            value={messageText}
            onChange={(e: React.SyntheticEvent) =>
              setMessageText((e.target as HTMLInputElement).value)
            }
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    </MessageInputWrapper>
  );
};

export default MessageInput;
