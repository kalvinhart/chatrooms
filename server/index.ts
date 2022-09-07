const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT ?? 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
