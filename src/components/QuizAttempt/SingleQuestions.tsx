import React, { useContext } from "react";
import { Box, Typography, Button, FormLabel } from "@mui/material";
import { QuizContext } from "../../DataContext/QuizContext";
import { useNavigate } from "react-router-dom";

const SingleQuestions: React.FC = () => {
  const navigate = useNavigate();
  const [currentAns, setCurrentAns] = React.useState<string>("");
  const contextValue = useContext(QuizContext);

  if (!contextValue) {
    // Handle case when context value is not available yet
    return <div>Loading questions...</div>;
  }

  const { questNo, setQuestNo, rightAns, setRightAns, questions } =
    contextValue;

  const currentQuestion = questions[questNo - 1];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAns(event.target.value);
  };

  const handleNextQuestion = () => {
    if (currentAns === currentQuestion.answer) {
      setRightAns(rightAns + 1);
    }

    setCurrentAns(""); // Reset the selected answer after moving to the next question

    if (questNo < questions.length) {
      setQuestNo(questNo + 1);
    } else {
      navigate("/result")
    }
  };



  return (
    <Box>
      <Typography>{currentQuestion.question}</Typography>
      <Box display="flex" flexDirection={"column"} gap={2} mt={2} mb={2}>
        {currentQuestion.options.map((option, i) => (
          <Box
            key={i}
            p={1}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              cursor: "pointer",
            }}
            borderRadius={"5px"}
            bgcolor={"white"}
          >
            <FormLabel style={{ cursor: "pointer" }}>
              <input
                name={`question-${questNo}`}
                type="radio"
                value={option}
                style={{ marginRight: "5px", cursor: "pointer" }}
                onChange={handleOptionChange}
                checked={currentAns === option}
              />
              {option}
            </FormLabel>
          </Box>
        ))}
      </Box>

      <Box
        maxWidth={"max-content"}
        m="auto"
        mt={3}
        display={questNo < 5 ? "block" : "none"}
      >
        <Button
          onClick={handleNextQuestion}
          variant="contained"
          size="large"
          style={{
            backgroundColor: "purple",
            borderRadius: "20px",
            maxWidth: "140px",
          }}
        >
          Next
        </Button>
      </Box>

      <Box
        maxWidth={"max-content"}
        m="auto"
        mt={3}
        display={questNo === 5 ? "block" : "none"}
      >
        <Button
          onClick={handleNextQuestion}
          variant="contained"
          size="large"
          style={{
            backgroundColor: "purple",
            borderRadius: "20px",
            maxWidth: "140px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SingleQuestions;
