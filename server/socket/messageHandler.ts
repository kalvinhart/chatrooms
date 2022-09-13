import { Server } from "socket.io";

export type Message = {
  messageId: string;
  roomId: string;
  sender: string;
  text: string;
  timestamp: number;
};

export const messageHandler = (io: Server, socket: any) => {
  let messages: Message[] = [];

  const handleMessageReceived = (message: Message) => {
    console.log(`Received message: "${message.text}" from room: ${message.roomId}`);
    messages.push(message);
    io.to(message.roomId).emit("chat:messageReceived", messages);
  };

  socket.on("chat:messageSend", handleMessageReceived);
};
