// React & dependencies
import { FC } from "react";

// Material Components
import { Box, Divider, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// My components
import Header from "../components/Header";
import ReviewsSummary from "../components/ReviewsSummary";
import ReviewCard from "../components/ReviewCard";

// Queries & Mutations

// Typescript
import { fakeReviews } from "../utils/dummyData";

// stars color: #f6c3a7
// divider color: #cea99f

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <>
      {/* Main container */}
      <Box display='flex' flexDirection='column' justifyContent='center'>
        <Header />
        <ReviewsSummary />
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          sx={{ mb: "1vh" }}
        ></Box>
        <Divider>
          <Fab
            sx={{ backgroundColor: "#8fc4c8", color: "gray" }}
            aria-label='add'
          >
            <AddIcon />
          </Fab>
        </Divider>

        <Box>
          {/* Reviews with comments map */}
          {fakeReviews.map((rev) => {
            return (
              <ReviewCard
                imgSrc={rev.imgSrc}
                name={rev.name}
                rut={rev.rut}
                stamp={rev.stamp}
                text={rev.text}
                rating={rev.rating}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};
export default HomeScreen;
