import mongoose from "mongoose";

const questionShema = mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  questionText: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});
export default mongoose.model("Question", questionShema);
