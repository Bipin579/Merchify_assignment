import React, { useContext, useEffect } from "react";
import { QuizContext } from "../DataContext/QuizContext";
import Timer from "../components/QuizAttempt/Timer";
import { Box } from "@mui/material";
import data from "../data/data.json";
import SingleQuestions from "../components/QuizAttempt/SingleQuestions";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const QuizAttempt = () => {
  const contextValue = useContext(QuizContext);

  useEffect(() => {
    if (!contextValue) {
      return;
    }

    const { setQuestions } = contextValue;

    const getRandomQuestions = (
      data: Question[],
      count: number
    ): Question[] => {
      const shuffledData = data.sort(() => 0.5 - Math.random());
      return shuffledData.slice(0, count);
    };

    // Assuming you have a `data` array containing all your questions
    const randomQuestions = getRandomQuestions(data, 5);

    setQuestions(randomQuestions);
  }, []);

  if (!contextValue) {
    return null;
  }

  const { questions } = contextValue;

  if (questions.length === 0) {
    // Handle loading state or wait for questions to load
    return <div>Loading questions...</div>;
  }
  return (
    <Box pt={10} p={5} minHeight={"100vh"} bgcolor={"#ECF1F4"}>
      <Timer />
      <SingleQuestions />
    </Box>
  );
};

export default QuizAttempt;
