import { Server } from "socket.io";

export interface RoomData {
  roomName: string;
  roomId: string;
}

export const roomHandler = (io: Server, socket: any) => {
  const createRoom = (data: RoomData, rooms: RoomData[]) => {
    socket.emit("room:create", data);
  };

  socket.on("room:create", createRoom);
};
