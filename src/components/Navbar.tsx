import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box bgcolor={"#ECF1F4"}>
      <Box margin={"auto"} width={"max-content"} p={1}>
        <Link to="/">
          <img alt="logo" src="https://merchify.in/asset/merchify-logo.svg" />
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
