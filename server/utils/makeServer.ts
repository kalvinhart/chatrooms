import { createServer } from "http";
import { Server } from "socket.io";

export const makeServer = (app: any) => {
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: {
      origin: [process.env.CORS_ORIGIN ?? "http://localhost:3000"],
    },
  });

  return { httpServer, io };
};
