import { createContext, ReactNode, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export const SocketContext = createContext<Socket | null>(null);

type Props = {
  children: ReactNode;
};
const SocketProvider = ({ children }: Props) => {
  const socket = io("localhost:5000", {
    autoConnect: false,
  });

  useEffect(() => {
    if (socket.connected) return;

    socket.connect();
    socket.on("connect", () => {
      console.log("connected: ", socket.id);
    });

    return () => {
      if (socket.connected) socket.disconnect();
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
