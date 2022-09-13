import { io, Socket } from "socket.io-client";
import { v4 as uuid } from "uuid";
import { Message } from "../../features/display-room/types/Message";
import { RoomData } from "../../features/room-menu/types/RoomData";

import { CreateRoomParams } from "../context/types";

export default class SocketService {
  _socket: Socket;
  constructor() {
    this._socket = io("localhost:5000", {
      autoConnect: false,
    });
  }

  connect() {
    this._socket.connect();
    this._socket.on("connect", () => {
      console.log("connected: ", this._socket.id);
    });
  }

  disconnect() {
    this._socket.disconnect();
  }

  get connected() {
    return this._socket.connected;
  }

  get self() {
    return this._socket;
  }

  on(action: string, callback: (data?: any) => void) {
    this._socket.on(action, callback);
  }

  off(action: string) {
    this._socket.off(action);
  }

  createRoom(data: CreateRoomParams) {
    const { roomName, desc } = data;
    console.log(`Creating room "${roomName}"...`);
    // const roomId = uuid();
    const roomId = "Test"; // for testing only
    this._socket.emit("room:create", { roomName, roomId, desc });
    this.joinRoom({ roomId, roomName: data.roomName });
  }

  joinRoom(data: RoomData) {
    console.log(`Joining room: "${data.roomName}"...`);
    this._socket.emit("room:join", data);
  }

  sendMessage(payload: Message) {
    this._socket.emit("chat:messageSend", payload);
  }
}
