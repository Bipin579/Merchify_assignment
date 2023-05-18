import { Box, Typography } from "@mui/material";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";

const QuizData1 = () => {
  return (
    <>
      <Box display={"flex"} columnGap={2}>
        <FaRegCommentDots fill="green" size={20} />
        <Typography fontSize={["10px", "14px", "14px", "14px", "14px"]}>
          Leave a Comment
        </Typography>
      </Box>

      <Box display={"flex"} columnGap={2} pt={1}>
        <BsBookmark fill="purple" size={20} />
        <Typography fontSize={["10px", "14px", "14px", "14px", "14px"]}>
          Save Quiz
        </Typography>
      </Box>

      <Box display={"flex"} columnGap={2} pt={1}>
        <RiSwordLine color="grey" size={20} />
        <Typography fontSize={["10px", "14px", "14px", "14px", "14px"]}>
          Invite Friends
        </Typography>
      </Box>
    </>
  );
};

export default QuizData1;
