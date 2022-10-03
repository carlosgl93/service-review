// React & dependencies
import { FC, useContext, useState } from "react";
import ReactCountryFlag from "react-country-flag";

// Material Components
import {
  Box,
  Avatar,
  Typography,
  SelectChangeEvent,
  Button,
} from "@mui/material";

// My components
import { Context } from "../context";
import LanguageSelector from "./LanguageSelector";
import { translate } from "../utils/translation";
import LanguageButton from "./LanguageButton";

// Queries & Mutations

// Typescript
interface Props {}
const Header: FC<Props> = () => {
  const { selectLanguage, selectedLanguage } = useContext(Context);
  console.log({ selectedLanguage });
  const [open, setOpen] = useState(false);
  const [selectingLanguage, setSelectingLanguage] = useState(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    selectLanguage(e.target.value);
    setSelectingLanguage(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectingLanguage(false);
  };
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-evenly'
      alignContent='center'
      alignItems='center'
      sx={{ mt: "1vh" }}
    >
      {/* Avatar picture to the left */}
      <Avatar
        sx={{
          height: "48.75px",
          width: "65px",
        }}
        alt="Constanza\'s Profile Picture"
        src='/img/avatarImg.jpg'
      />
      {/* Name to the right */}
      <Box>
        <Typography>Constanza Sepulveda</Typography>
      </Box>
      {/* SELECT LANGUAGE COMPONENTS */}
      {selectingLanguage == false && (
        <LanguageButton
          setOpen={setOpen}
          selectingLanguage={selectingLanguage}
          setSelectingLanguage={setSelectingLanguage}
        />
      )}

      {selectingLanguage && (
        <LanguageSelector
          open={open}
          handleChange={handleChange}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      {/* SELECT LANGUAGE COMPONENTS */}
    </Box>
  );
};
export default Header;
