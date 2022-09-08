import { createServer } from "http";
import { Server } from "socket.io";

export const makeServer = (app: any) => {
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  return { httpServer, io };
};
