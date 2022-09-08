import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { makeServer } from "./utils/makeServer";

const app = express();
app.use(cors());

const { httpServer, io } = makeServer(app);

io.on("connection", (socket: any) => {
  console.log("Connected: ", socket.id);

  socket.on("create room", (data: { name: string }) => {
    const { name } = data;
    console.log(name);

    socket.emit("create room", { name });
  });
});

const PORT = process.env.PORT ?? 5050;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
