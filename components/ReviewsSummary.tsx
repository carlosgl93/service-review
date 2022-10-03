// React & dependencies
import { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
// Material Components
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

// My components
import Ratings from "./Ratings";
import { Context } from "../context";
import { translate } from "../utils/translation";

// Queries & Mutations

// Typescript
import { Review } from "../interfaces";

interface Props {
  reviewsAverage: number | null;
}

const ReviewsSummary: FC<Props> = ({ reviewsAverage }) => {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(Context);

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          m: "1vh 1vw",
          p: "1vh 1vw",
        }}
      >
        <Typography variant='subtitle2'>{t("title")}</Typography>
        <Typography variant='subtitle2'>
          {translate(2, selectedLanguage)}
        </Typography>
      </Box>
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
            {reviewsAverage == null ? (
              <CircularProgress />
            ) : (
              <>
                <Typography variant='h4' sx={{ color: "#8fc4c8" }}>
                  {reviewsAverage}
                </Typography>
                <Ratings ratingAverage={reviewsAverage} />
              </>
            )}
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
