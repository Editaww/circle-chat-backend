import { v4 as uuidv4 } from "uuid";
import QuestionModel from "../model/question.js";

const CREATE_QUESTION = async (req, res) => {
  try {
    const newQuestion = {
      userName: req.body.userName,
      questionText: req.body.questionText,
      date: req.body.date || Date.now(),
      userId: req.body.userId,
      id: uuidv4(),
    };

    const response = await new QuestionModel(newQuestion);

    await response.save();

    return res
      .status(201)
      .json({ message: " Question was created", response: response });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred while creating the question" });
  }
};

const GET_QUESTIONS = async (req, res) => {
  try {
    const response = await QuestionModel.find();

    return res.status(200).json({ question: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in application" });
  }
};

const DELETE_QUESTION_BY_ID = async (req, res) => {
  try {
    const response = await QuestionModel.findOne({
      id: req.params.id,
    });

    if (response.userId !== req.body.userId) {
      return res
        .status(403)
        .json({ message: "Yuo can only delete packages what belongs to You" });
    }

    if (!response) {
      return res.status(404).json({ message: "Question not found" });
    }
    await QuestionModel.deleteOne({ id: req.params.id });
    return res
      .status(200)
      .json({ message: "Question was deleted", package: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in application" });
  }
};

export { CREATE_QUESTION, GET_QUESTIONS, DELETE_QUESTION_BY_ID };
