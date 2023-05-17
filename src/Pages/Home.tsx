import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  Rating,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBookmark, BsQuestionCircle } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";
import { GiAlliedStar } from "react-icons/gi";
import {
  AiOutlineClockCircle,
  AiOutlineExclamationCircle,
  AiFillSignal,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
type Props = {};

const Home: React.FC<Props> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      px={[2, 4, 6, 8, 10]}
      py={[1, 2, 3, 4, 5]}
      display={"flex"}
      bgcolor={"#ECF1F4"}
      height={"100%"}
      flexDirection={["column", "column", "column", "row", "row", "row"]}
      rowGap={5}
    >
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
          </Box>

          <Box mt={2} pr={2}>
            <Box>
              <AvatarGroup
                total={143}
                spacing={isSmallScreen ? "small" : "medium"}
                max={isSmallScreen ? 3 : 5}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://mui.com/static/images/avatar/5.jpg"
                  style={{ objectFit: "cover" }}
                />
              </AvatarGroup>
              <Typography
                color={"grey"}
                fontSize={["10px", "14px", "14px", "14px", "14px"]}
              >
                are competing
              </Typography>
            </Box>

            <Box>
              <Rating name="read-only" value={4.5} readOnly />
              <Typography
                color={"grey"}
                fontSize={["10px", "14px", "14px", "14px", "14px"]}
              >
                4 Ratings (4.5)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        width={{ sm: "100%", md: "35%", lg: "35%", xl: "35%" }}
        pl={[0, 0, 0, 4, 4]}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          The Daily MS Excel Quiz
        </Typography>
        <Typography variant="h6" fontWeight={"550"} mt={1}>
          The Quiz includes
        </Typography>
        <Box display={"flex"} columnGap={2} pt={2}>
          <MdOutlineAutoAwesomeMotion color="green" size={25} />
          <Typography fontWeight={"bold"} color="grey">
            1 Attempt Daily
          </Typography>
        </Box>

        <Box display={"flex"} columnGap={2} pt={2}>
          <BsQuestionCircle color="green" size={25} />
          <Typography fontWeight={"bold"} color="grey">
            5 Questions
          </Typography>
        </Box>
        <Box display={"flex"} columnGap={2} pt={2}>
          <AiOutlineClockCircle color="green" size={25} />
          <Typography fontWeight={"bold"} color="grey">
            10 Minutes
          </Typography>
        </Box>
        <Box display={"flex"} columnGap={2} pt={2}>
          <HiOutlineDocumentText size={25} />
          <Typography fontWeight={"bold"} color="grey">
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
          <GiAlliedStar size={25} />
          <Typography fontWeight={"bold"} color="grey">
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

        <Box maxWidth={"max-content"} m="auto" mt={3}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
