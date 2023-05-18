import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { QuizContext } from "../DataContext/QuizContext";
import ShareIcon from "@mui/icons-material/Share";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Result: React.FC = () => {
  const contextValue = useContext(QuizContext);

  if (!contextValue) {
    return null;
  }

  const { time, rightAns } = contextValue;

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const avgTime = Math.floor(time / 5);

  return (
    <Box minHeight={"100vh"} bgcolor={"#ECF1F4"}>
      <Box
        width={{ sm: "100%", md: "65%", lg: "65%", xl: "65%" }}
        margin={"auto"}
      >
        {/* image box  */}
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={2}
          borderRadius={"10px"}
          bgcolor={"white"}
          display={["none", "block", "block", "block", "block"]}
        >
          <img
            alt="Remy Sharp"
            src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1676280764794-The%20Daily%20MS%20Excel%20Quiz.webp"
            style={{ maxWidth: "80%", margin: "0 auto", display: "block" }}
          />
        </Box>

        <Box
          display={["block", "none", "none", "none", "none"]}
          bgcolor={[
            "#E1C6EE",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
          ]}
          pt={4}
        >
          <Typography textAlign={"center"} variant="h5">
            The Daily MS Excel Quiz
          </Typography>
        </Box>

        {/* result data  */}
        <Box
          display={"flex"}
          gap={4}
          pt={2}
          flexDirection={["column", "row", "row", "row", "row"]}
          bgcolor={[
            "#E1C6EE",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
          ]}
        >
          {/* score in percentage  */}
          <Box
            textAlign={"center"}
            width={["50%", "40%", "40%", "40%", "40%", "40%"]}
            margin={"auto"}
          >
            <Typography fontWeight={"bold"} color="green">
              You Scored:
            </Typography>
            <Typography fontWeight={"bold"} color="green">
              {rightAns * 20 + "%"}
            </Typography>
            <Typography fontSize={"small"}>
              Success is not final, failure is not fatal; It is the courage to
              continue that counts.
            </Typography>
          </Box>

          <Box
            display={"flex"}
            width={["90%", "90%", "60%", "60%", "60%", "60%"]}
            margin={"auto"}
          >
            {/* score in No  */}
            <Box textAlign={"center"} width={"50%"}>
              <Typography
                fontSize={["small", "small", "medium", "meduim", "medium"]}
                fontWeight={"bold"}
              >
                Your Score:
              </Typography>
              <Typography
                fontSize={["small", "small", "medium", "meduim", "medium"]}
                fontWeight={"bold"}
              >
                {rightAns + "/" + 5}
              </Typography>
              <Typography
                fontSize={["small", "small", "medium", "meduim", "medium"]}
                fontWeight={"bold"}
              >
                {"Avg:" + rightAns + " marks."}
              </Typography>
            </Box>
            {/* time taken  */}
            <Box textAlign={"center"} width={"50%"}>
              <Typography
                fontSize={["small", "small", "medium", "meduim", "medium"]}
                fontWeight={"bold"}
              >
                Time Taken:
              </Typography>
              <Typography
                fontSize={["small", "small", "medium", "meduim", "medium"]}
                fontWeight={"bold"}
              >
                {formatTime(time) + " mins."}
              </Typography>
              <Typography fontWeight={"bold"}>
                {"Avg:" + formatTime(avgTime) + " mins."}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          bgcolor={[
            "#E1C6EE",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
          ]}
        >
          <Box
            width="max-content"
            margin="auto"
            display={"flex"}
            columnGap={1}
            pt={2}
            bgcolor={[
              "#E1C6EE",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
            ]}
            pb={1.5}
          >
            <ShareIcon />{" "}
            <Typography fontWeight={"bold"}>Share with your friends</Typography>
          </Box>
        </Box>

        <Box display={["none", "block", "block", "block", "block"]}>
          <Box
            width="max-content"
            margin="auto"
            display={"flex"}
            columnGap={2}
            py={1}
          >
            <Box display={"flex"} columnGap={1} alignItems={"center"}>
              <FaWhatsappSquare color="#128C7E" />
              <Typography fontSize={"small"}>Whatsapp</Typography>
            </Box>
            <Box display={"flex"} columnGap={1} alignItems={"center"}>
              <AiFillTwitterCircle color="#1DA1F2" />
              <Typography fontSize={"small"}>Twitter</Typography>
            </Box>
            <Box display={"flex"} columnGap={1} alignItems={"center"}>
              <BsFacebook color="#4267B2" />
              <Typography fontSize={"small"}>Facebook</Typography>
            </Box>
            <Box display={"flex"} columnGap={1} alignItems={"center"}>
              <BsLinkedin color="#0077b5" />
              <Typography fontSize={"small"}>Linkedin</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
