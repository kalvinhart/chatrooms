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
    socket?.on("room:create", (data: RoomData) => {
      console.log("creating room...");
      setRooms((prev) => [...prev, { roomName: data.roomName, roomId: data.roomId }]);
    });

    return () => {
      socket?.off("room:create");
    };
  }, [socket]);

  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleClose = () => setShowCreateModal(false);

  const handleCreateRoom = (roomName: string) => {
    socket?.emit("room:create", { roomName, roomId: uuid() });
    handleClose();
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
          <li key={roomId}>{roomName}</li>
        ))}
      </ul>
    </RoomMenuWrapper>
  );
};

export default RoomMenu;
