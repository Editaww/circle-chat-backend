import mongoose from "mongoose";

const userShema = mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userShema);
