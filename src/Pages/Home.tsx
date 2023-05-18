import { Box, Button } from "@mui/material";
import React from "react";
import QuizData1 from "../components/Home/QuizData1";
import QuizRating from "../components/Home/QuizRating";
import QuizInfo from "../components/Home/QuizInfo";
import { Link } from "react-router-dom";
type Props = {};

const Home: React.FC<Props> = () => {
  window.location.reload();
  return (
    <Box
      px={[2, 4, 6, 8, 10]}
      py={[1, 2, 3, 4, 5]}
      display={"flex"}
      bgcolor={"#ECF1F4"}
      minHeight={"100vh"}
      flexDirection={["column", "column", "row", "row", "row", "row"]}
      rowGap={5}
    >
      {/* top image box  */}

      <Box width={{ sm: "100%", md: "65%", lg: "65%", xl: "65%" }}>
        <Box
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          p={2}
          borderRadius={"10px"}
          bgcolor={"white"}
        >
          <img
            alt="Remy Sharp"
            src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1676280764794-The%20Daily%20MS%20Excel%20Quiz.webp"
            style={{ maxWidth: "80%", margin: "0 auto", display: "block" }}
          />
        </Box>
        <Box
          mt={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            {/* quiz data below header image  */}
            <QuizData1 />
          </Box>

          <Box mt={2} pr={2}>
            {/* quiz rating and review  */}
            <QuizRating />
          </Box>
        </Box>
      </Box>

      <Box
        width={{ sm: "100%", md: "35%", lg: "35%", xl: "35%" }}
        pl={[0, 0, 3, 4, 4]}
      >
        {/* all the information about quiz  */}
        <QuizInfo />

        <Box maxWidth={"max-content"} m="auto" mt={3}>
          <Link to="/attempt">
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "purple",
                borderRadius: "20px",
                maxWidth: "140px",
              }}
            >
              Take Quiz
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
