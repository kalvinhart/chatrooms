import React, { useState } from "react";

import { RoomMenuFormWrapper } from "./RoomMenuForm.styles";
import { Button } from "../../../common/styles/buttonStyles";
import { Form, FormGroup, Input, Label } from "../../../common/styles/formStyles";

type Props = {
  handleCreateRoom: (roomName: string) => void;
};
const RoomMenuForm = ({ handleCreateRoom }: Props) => {
  const [formName, setFormName] = useState("");

  const createRoom = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formName || formName === "") return;

    handleCreateRoom(formName);
  };

  return (
    <RoomMenuFormWrapper>
      <h2>Create a New Room</h2>
      <Form>
        <FormGroup>
          <Label htmlFor="roomName">Room Name:</Label>
          <Input
            type="text"
            id="roomName"
            onChange={(e) => setFormName(e.target.value)}
          />
        </FormGroup>
        <Button onClick={createRoom}>Create</Button>
      </Form>
    </RoomMenuFormWrapper>
  );
};

export default RoomMenuForm;
