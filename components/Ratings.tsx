// React & dependencies
import { FC, useEffect } from "react";

// Material Components
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// My components

// Queries & Mutations

// Typescript
interface Props {
  ratingAverage: number;
}
const Ratings: FC<Props> = ({ ratingAverage }) => {
  return (
    <Stack spacing={1}>
      <Rating value={ratingAverage} readOnly sx={{ color: "#f6c3a7" }} />
    </Stack>
  );
};
export default Ratings;
