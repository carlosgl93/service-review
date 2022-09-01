// React & dependencies
import { Avatar, Box, Divider, Grid, Rating, Typography } from "@mui/material";
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  imgSrc?: string;
  name: string;
  rut: string;
  stamp?: string;
  text: string;
  rating: number;
}
const ReviewCard: FC<Props> = ({ imgSrc, name, rut, stamp, text, rating }) => {
  return (
    <Box
      sx={{
        margin: "1vh 2vw",
      }}
    >
      <Grid container spacing={0} sx={{ mb: "-2vh" }}>
        <Grid item xs={2}>
          <Avatar
            src={
              imgSrc
                ? imgSrc
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BmH3ZlwXDCONbWa_sNSb4GpdFd2GxFJmr8zCIo4&s"
            }
          />
        </Grid>
        <Grid item xs={7}>
          <Box>
            <Typography variant='body1' sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='caption' sx={{ color: "#cea99f" }}>
            {rut}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Rating
            defaultValue={rating}
            precision={0.2}
            readOnly
            sx={{ color: "#f6c3a7", marginTop: { xs: 3, sm: 3, md: 0 } }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant='caption'>{stamp}</Typography>
        </Grid>
      </Grid>

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='start'
        sx={{
          mb: "2.5vh",
        }}
      >
        <Typography variant='body1'>{text}</Typography>
      </Box>
      <Divider
        sx={{
          bgcolor: "#f6c3a7",
        }}
      />
    </Box>
  );
};
export default ReviewCard;
