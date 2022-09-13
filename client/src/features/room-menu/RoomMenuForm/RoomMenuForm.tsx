import React, { useState } from "react";

import { RoomMenuFormWrapper } from "./RoomMenuForm.styles";
import { Button } from "../../../common/styles/buttonStyles";
import { Form, FormGroup, Input, Label } from "../../../common/styles/formStyles";

type Props = {
  handleCreateRoom: (data: { roomName: string; desc: string }) => void;
};
const RoomMenuForm = ({ handleCreateRoom }: Props) => {
  const [roomName, setRoomName] = useState("");
  const [desc, setDesc] = useState("");

  const createRoom = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!roomName || roomName === "") return;

    handleCreateRoom({ roomName, desc });
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
            onChange={(e) => setRoomName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="desc">Description (optional):</Label>
          <Input type="text" id="desc" onChange={(e) => setDesc(e.target.value)} />
        </FormGroup>

        <Button onClick={createRoom}>Create</Button>
      </Form>
    </RoomMenuFormWrapper>
  );
};

export default RoomMenuForm;
