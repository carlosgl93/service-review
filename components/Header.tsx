// React & dependencies
import { Box, Avatar, Typography } from "@mui/material";
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {}
const Name: FC<Props> = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-around'
      alignContent='center'
      alignItems='center'
    >
      {/* Avatar picture to the left */}
      <Avatar
        sx={{
          height: "55px",
          width: "65px",
        }}
        alt="Constanza\'s Profile Picture"
        src='https://scontent.fscl8-1.fna.fbcdn.net/v/t1.6435-9/87479825_10221520390257109_8880434244187324416_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH6efUJJA5P2WJfNTnWO1jkxKSR0K8YgjnEpJHQrxiCOWR_jE0VuUO0m4CverOzDSM&_nc_ohc=dGXN7EbqiyMAX8WyZIi&_nc_oc=AQmfX2w9qZg2C4s0B0jZTODHRj5SZtkes8zo_Zax1tdwI1lvEYd4gqyZZGzJAqgSHTla1kIbDLNnmqeDuCC5fJrK&tn=D0JQ5YHBZHcedgql&_nc_ht=scontent.fscl8-1.fna&oh=00_AT8VtZ_G45HS7Gd8WAgWO2aJhh4A5AoRI2qk7O-uomNXYw&oe=632064A7'
      />
      {/* Name to the right */}
      <Box>
        <Typography>Constanza Sepulveda</Typography>
      </Box>
    </Box>
  );
};
export default Name;
