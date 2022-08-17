// React & dependencies
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Ratings from "./Ratings";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {}

const ReviewsSummary: FC<Props> = () => {
  return (
    <>
      <Box>
        {/* Top centered part */}
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          sx={{
            marginX: "25vw",
          }}
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            sx={{
              marginX: "17.5vw",
            }}
          >
            {/* Reviews AVG */}
            <Typography variant='h4' sx={{ color: "#8fc4c8" }}>
              4.8
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            sx={{
              marginX: "7.5vw",
            }}
          >
            {/* Stars averaged */}
            <Ratings ratingAverage={4.5} />
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            sx={{
              marginX: "2.5vw",
            }}
          >
            <Typography sx={{ color: "#cea99f" }}>
              Based on 23 reviews
            </Typography>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row'>
          {/* Bottom with graph lines */}
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
          >
            <Typography>Excellent</Typography>
            <Typography>Good</Typography>
            <Typography>Average</Typography>
            <Typography>Poor</Typography>
          </Box>
          <Box display='flex' flexDirection='column'></Box>
        </Box>
      </Box>
    </>
  );
};
export default ReviewsSummary;
