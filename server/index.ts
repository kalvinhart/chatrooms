import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { makeServer } from "./utils/makeServer";
import { socketHandler } from "./socket";

import roomRoutes from "./routes/roomRoutes";

const app = express();
app.use(cors());

const { httpServer, io } = makeServer(app);

socketHandler(io);

app.use("/api/rooms", roomRoutes);

const PORT = process.env.PORT ?? 5050;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
