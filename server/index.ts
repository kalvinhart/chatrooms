const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { createServer } = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket: any) => {
  console.log("Connected: ", socket.id);
});

const PORT = process.env.PORT ?? 5050;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
