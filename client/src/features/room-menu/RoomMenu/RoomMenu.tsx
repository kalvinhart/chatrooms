import { useEffect, useState } from "react";

import { RoomMenuForm } from "../RoomMenuForm";

import { RoomMenuWrapper } from "./RoomMenu.styles";
import { Modal } from "../../../common/components/Modal";
import { useSocket } from "../../../common/hooks/useSocket";
import { Button } from "../../../common/styles/buttonStyles";

const RoomMenu = () => {
  const socket = useSocket();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [rooms, setRooms] = useState<string[]>([]);

  useEffect(() => {
    socket?.on("create room", (data: { name: string }) => {
      console.log("creating room...");
      setRooms((prev) => [...prev, data.name]);
    });
  }, [socket]);

  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleClose = () => setShowCreateModal(false);

  const handleCreateRoom = (roomName: string) => {
    socket?.emit("create room", { name: roomName });
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
        {rooms.map((room) => (
          <li key={room}>{room}</li>
        ))}
      </ul>
    </RoomMenuWrapper>
  );
};

export default RoomMenu;
