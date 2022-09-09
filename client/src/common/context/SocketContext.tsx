import { createContext, ReactNode, useEffect, useMemo } from "react";
import SocketService from "../services/socketService";

export const SocketContext = createContext<SocketService>(new SocketService());

type Props = {
  children: ReactNode;
};
const SocketProvider = ({ children }: Props) => {
  const socket = useMemo(() => new SocketService(), []);

  useEffect(() => {
    if (socket.connected) return;

    socket.connect();

    return () => {
      if (socket.connected) socket.disconnect();
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
