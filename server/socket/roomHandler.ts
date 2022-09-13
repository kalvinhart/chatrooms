import { Server } from "socket.io";

export interface RoomData {
  roomName: string;
  roomId: string;
}

export const roomHandler = (io: Server, socket: any) => {
  let rooms: RoomData[] = [];

  const createRoom = (data: RoomData) => {
    rooms.push(data);
    io.emit("room:created", { rooms });
    joinRoom(data);
  };

  const joinRoom = ({ roomId, roomName }: RoomData) => {
    socket.join(roomId);
    console.log(`user ${socket.id} joined ${roomName}`);
    console.log("room info: ", socket.rooms);
    socket.emit("room:joined", { roomId, roomName });
  };

  socket.on("room:create", createRoom);
  socket.on("room:join", joinRoom);
};
