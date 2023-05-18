import {
  Box,
  Avatar,
  AvatarGroup,
  Typography,
  useMediaQuery,
  useTheme,
  Rating,
} from "@mui/material";

const QuizRating = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
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
    </>
  );
};

export default QuizRating;
