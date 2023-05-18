import { Box, Typography } from "@mui/material";
import { BsQuestionCircle } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import {
  AiOutlineClockCircle,
  AiOutlineExclamationCircle,
  AiFillSignal,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const QuizInfo = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={"bold"}>
        The Daily MS Excel Quiz
      </Typography>
      <Typography fontWeight={"550"} mt={1}>
        The Quiz includes
      </Typography>
      <Box display={"flex"} columnGap={2} pt={2}>
        <MdOutlineAutoAwesomeMotion color="green" size={20} />
        <Typography fontSize={"14px"} fontWeight={"bold"} color="grey">
          1 Attempt Daily
        </Typography>
      </Box>

      <Box display={"flex"} columnGap={2} pt={2}>
        <BsQuestionCircle color="green" size={20} />
        <Typography fontSize={"14px"} fontWeight={"bold"} color="grey">
          5 Questions
        </Typography>
      </Box>
      <Box display={"flex"} columnGap={2} pt={2}>
        <AiOutlineClockCircle color="green" size={20} />
        <Typography fontSize={"14px"} fontWeight={"bold"} color="grey">
          5 Minutes
        </Typography>
      </Box>
      <Box display={"flex"} columnGap={2} pt={2}>
        <HiOutlineDocumentText size={20} />
        <Typography fontSize={"14px"} fontWeight={"bold"} color="grey">
          50% Passing Percentage
        </Typography>
      </Box>
      <Box
        display={"flex"}
        color="gold"
        columnGap={2}
        pt={2}
        alignItems={"center"}
      >
        <GiAlliedStar size={20} />
        <Typography
          fontSize={"14px"}
          fontWeight={"bold"}
          color="grey"
          display={"flex"}
          columnGap={1}
        >
          10 Karma/Day <AiOutlineExclamationCircle size={20} />
        </Typography>
      </Box>
      <Typography variant="h6" fontWeight={"550"} mt={2}>
        Skills You will Acquire
      </Typography>

      <Box
        display={"flex"}
        columnGap={2}
        mt={2}
        p={1}
        bgcolor={"white"}
        maxWidth={"max-content"}
        style={{ borderRadius: "10px" }}
      >
        <AiFillSignal color="green" size={20} />
        <Typography fontWeight={"bold"} color="grey">
          MS Excel
        </Typography>
      </Box>
    </>
  );
};

export default QuizInfo;
