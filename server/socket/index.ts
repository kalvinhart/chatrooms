import { Server } from "socket.io";
import { messageHandler } from "./messageHandler";
import { roomHandler } from "./roomHandler";

export const socketHandler = (io: Server) => {
  io.on("connection", (socket: any) => {
    console.log("Connected: ", socket.id);

    roomHandler(io, socket);
    messageHandler(io, socket);
  });
};
