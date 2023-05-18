import React, { useContext, useEffect } from "react";
import { QuizContext } from "../../DataContext/QuizContext";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Timer: React.FC = () => {
  const navigate = useNavigate();
  const contextValue = useContext(QuizContext);

  useEffect(() => {
    if (!contextValue) {
      return;
    }

    const { time, setTime } = contextValue;

    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        navigate("/result"); // Navigate to "/result" when the time becomes zero
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [contextValue, navigate]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const { questNo, time } = contextValue || {};

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={4}
      alignItems="center"
      mb={3}
    >
      <Box>
        <Typography
          fontSize={["20px", "25px", "30px", "30px", "30px"]}
          fontWeight="bold"
          bgcolor="lightgreen"
          color="white"
          py={0.5}
          px={3}
          borderRadius="20px"
        >
          {questNo}/{5}
        </Typography>
      </Box>
      <Box>
        <Typography
          fontSize={["20px", "25px", "30px", "30px", "30px"]}
          fontWeight="bold"
          bgcolor="purple"
          color="white"
          py={0.5}
          px={3}
          borderRadius="20px"
        >
          {time && formatTime(time)}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Timer);
