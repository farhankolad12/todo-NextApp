import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

export const Users =
  mongoose.models?.Users || mongoose.model("Users", userSchema);
