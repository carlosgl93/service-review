// React & dependencies
import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";

// Material Components
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// My components

// Queries & Mutations

// Typescript
interface Props {
  reviewScore: number | null;
  setReviewScore: Dispatch<SetStateAction<number | null>>;
}
const Name: FC<Props> = ({ reviewScore, setReviewScore }) => {
  const handleChangeReviewScore = (
    event: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setReviewScore(value);
  };

  return (
    <Stack spacing={1}>
      <Rating
        name='rating'
        value={reviewScore}
        precision={0.2}
        readOnly
        sx={{ color: "#f6c3a7" }}
        onChange={(e, newValue) => handleChangeReviewScore(e, newValue)}
      />
    </Stack>
  );
};
export default Name;
