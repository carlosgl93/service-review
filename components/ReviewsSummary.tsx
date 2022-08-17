// React & dependencies
import { Box, Grid, Typography } from "@mui/material";
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
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box display='flex' justifyContent='center'>
            <Typography variant='h4' sx={{ color: "#8fc4c8" }}>
              4.8
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Ratings ratingAverage={4.5} />
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        sx={{
          marginX: "25vw",
        }}
      >
        {/* Top centered part */}
        <Box>
          {/* Reviews AVG */}
          <Typography variant='h4' sx={{ color: "#8fc4c8" }}>
            4.8
          </Typography>

          {/* Stars averaged */}
          <Ratings ratingAverage={4.5} />

          <Typography sx={{ color: "#cea99f" }}>23 reviews</Typography>
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
            <Typography>Below average</Typography>
            <Typography>Poor</Typography>
          </Box>
          <Box display='flex' flexDirection='column'></Box>
        </Box>
      </Box>
    </>
  );
};
export default ReviewsSummary;
