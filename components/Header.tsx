// React & dependencies
import { Box, Avatar, Typography } from "@mui/material";
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {}
const Header: FC<Props> = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-evenly'
      alignContent='center'
      alignItems='center'
      sx={{ mt: "1vh" }}
    >
      {/* Avatar picture to the left */}
      <Avatar
        sx={{
          height: "48.75px",
          width: "65px",
        }}
        alt="Constanza\'s Profile Picture"
        src='/img/avatarImg.jpg'
      />
      {/* Name to the right */}
      <Box>
        <Typography>Constanza Sepulveda</Typography>
      </Box>
    </Box>
  );
};
export default Header;
