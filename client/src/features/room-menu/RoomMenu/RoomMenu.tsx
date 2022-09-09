import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { RoomMenuForm } from "../RoomMenuForm";

import { RoomMenuWrapper } from "./RoomMenu.styles";
import { Modal } from "../../../common/components/Modal";
import { useSocket } from "../../../common/hooks/useSocket";
import { Button } from "../../../common/styles/buttonStyles";

import { RoomData } from "../types/RoomData";

const RoomMenu = () => {
  const socket = useSocket();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [rooms, setRooms] = useState<RoomData[]>([]);

  useEffect(() => {
    type RoomsResponse = {
      rooms: RoomData[];
    };
    socket?.on("room:created", ({ rooms }: RoomsResponse) => {
      setRooms(rooms);
    });

    return () => {
      socket?.off("room:created");
    };
  }, [socket]);

  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleClose = () => setShowCreateModal(false);

  type CreateRoomParams = {
    roomName: string;
    desc: string;
  };
  const handleCreateRoom = ({ roomName, desc }: CreateRoomParams) => {
    console.log(`Creating room "${roomName}"...`);
    socket?.emit("room:create", { roomName, roomId: uuid(), desc });
    handleClose();
  };

  const handleJoinRoom = (data: RoomData) => {
    console.log(`Joining room: "${data.roomName}"...`);
    socket?.emit("room:join", data);
  };

  return (
    <RoomMenuWrapper>
      <Button onClick={handleCreateClick}>Create Room</Button>

      {showCreateModal && (
        <Modal handleClose={handleClose}>
          <RoomMenuForm handleCreateRoom={handleCreateRoom} />
        </Modal>
      )}

      <h2>Available Rooms:</h2>
      <ul>
        {rooms.map(({ roomId, roomName }) => (
          <li key={roomId}>
            <Button onClick={() => handleJoinRoom({ roomId, roomName })}>
              {roomName}
            </Button>
          </li>
        ))}
      </ul>
    </RoomMenuWrapper>
  );
};

export default RoomMenu;
