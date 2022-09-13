import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: 40,
    },
    desc: {
      type: String,
      maxLength: 80,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
