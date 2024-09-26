import { v4 as uuidv4 } from "uuid";
import AnswerModel from "../model/answer.js";

const CREATE_ANSWER = async (req, res) => {
  try {
    const newAnswer = {
      userName: req.body.userName,
      answerText: req.body.answerText,
      date: req.body.date || Date.now(),
      gainedLikesNumber: req.body.gainedLikesNumber,
      questionId: req.params.id,
      userId: req.body.userId,
      id: uuidv4(),
    };

    const response = await new AnswerModel(newAnswer);

    await response.save();

    return res
      .status(201)
      .json({ message: " Answern was created", response: response });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred while creating the answer" });
  }
};

const GET_ANSWER = async (req, res) => {
  try {
    const response = await AnswerModel.find({ questionId: req.params.id });

    return res.status(200).json({ answer: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in application" });
  }
};

const LIKE_ANSWER = async (req, res) => {
  try {
    const { answerId } = req.body;

    const answer = await AnswerModel.findOne({ id: answerId });

    if (!answer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    answer.gainedLikesNumber += 1;
    await answer.save();

    return res.status(200).json({ message: "Answer liked", answer });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Error occurred while liking the answer" });
  }
};

const DISLIKE_ANSWER = async (req, res) => {
  try {
    const { answerId } = req.body;

    const answer = await AnswerModel.findOne({ id: answerId });

    if (!answer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    answer.gainedDislikesNumber += 1;
    await answer.save();

    return res.status(200).json({ message: "Answer disliked", answer });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Error occurred while disliking the answer" });
  }
};

const DELETE_ANSWER_BY_ID = async (req, res) => {
  try {
    const response = await AnswerModel.findOne({
      id: req.params.id,
    });

    if (!response) {
      return res.status(404).json({ message: "Answer not found" });
    }

    if (response.questionId !== req.params.questionId) {
      return res
        .status(403)
        .json({ message: "Yuo can only delete answer what belongs to You" });
    }

    if (!response) {
      return res.status(404).json({ message: "Answer not found" });
    }
    await AnswerModel.deleteOne({ id: req.params.id });
    return res
      .status(200)
      .json({ message: "Answer was deleted", answer: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in application" });
  }
};

export {
  CREATE_ANSWER,
  GET_ANSWER,
  LIKE_ANSWER,
  DISLIKE_ANSWER,
  DELETE_ANSWER_BY_ID,
};
