// React & dependencies
import { FC, useContext } from "react";
import ReactCountryFlag from "react-country-flag";

// Material Components
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

// My components
import { Context } from "../context";
import { translate } from "../utils/translation";

// Queries & Mutations

// Typescript
interface Props {
  open: boolean;
  handleChange: (e: SelectChangeEvent<string>) => void;
  handleOpen: () => void;
  handleClose: () => void;
}
const Name: FC<Props> = ({ open, handleChange, handleOpen, handleClose }) => {
  const { selectLanguage, selectedLanguage } = useContext(Context);
  return (
    <Box>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id='selectedLanguage'>
          <ReactCountryFlag countryCode={selectedLanguage} svg />
        </InputLabel>
        <Select
          labelId='selectedLanguage'
          id='languageSelector'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedLanguage}
          label={translate(0, selectedLanguage)}
          onChange={handleChange}
        >
          <MenuItem value={"en"}>
            <ReactCountryFlag countryCode='US' svg />
          </MenuItem>
          <MenuItem value={"es"}>
            <ReactCountryFlag countryCode='ES' svg />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Name;
