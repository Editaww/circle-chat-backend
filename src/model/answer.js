import mongoose from "mongoose";

const answerShema = mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  answerText: { type: String, required: true },
  date: { type: Date, default: Date.now },
  gainedLikeNumber: { type: Number, default: 0 },
  gainedDislikeNumber: { type: Number, default: 0 },
  questionId: { type: String, required: true },
});
export default mongoose.model("Answer", answerShema);
