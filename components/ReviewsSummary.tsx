// React & dependencies
import { FC, useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  SnapshotOptions,
} from "firebase/firestore";
// Material Components
import { Box, Grid, Typography } from "@mui/material";

// My components
import Ratings from "./Ratings";
import { db } from "../firebaseConfig";

// Queries & Mutations

// Typescript
import { Review } from "../interfaces";
interface Props {}

const ReviewsSummary: FC<Props> = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          xs={12}
          md={6}
        >
          <Box
            display='flex'
            flexDirection='row'
            textAlign='center'
            justifyContent='center'
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='start'
              textAlign='start'
              alignContent='center'
              sx={{
                my: "5vh",
              }}
            >
              <Typography>Excellent</Typography>
              <Typography>Good</Typography>
              <Typography>Average</Typography>
              <Typography>Below average</Typography>
              <Typography>Poor</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            textAlign='center'
            alignItems='center'
            alignContent='center'
            sx={{
              my: "5vh",
            }}
          >
            <Typography variant='h4' sx={{ color: "#8fc4c8" }}>
              4.8
            </Typography>
            <Ratings ratingAverage={4.5} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ReviewsSummary;

<Box display='flex' flexDirection='row'>
  {/* Bottom with graph lines */}
  <Box display='flex' flexDirection='column' justifyContent='flex-start'>
    <Typography>Excellent</Typography>
    <Typography>Good</Typography>
    <Typography>Average</Typography>
    <Typography>Below average</Typography>
    <Typography>Poor</Typography>
  </Box>
  <Box display='flex' flexDirection='column'></Box>
</Box>;
