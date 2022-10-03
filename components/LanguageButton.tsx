// React & dependencies
import { FC, SetStateAction, useContext } from "react";
import ReactCountryFlag from "react-country-flag";

// Material Components
import { Button } from "@mui/material";

// My components
import { Context } from "../context";

// Queries & Mutations

// Typescript
interface Props {
  setOpen: (value: SetStateAction<boolean>) => void;
  selectingLanguage: boolean;
  setSelectingLanguage: (value: SetStateAction<boolean>) => void;
}
const LanguageButton: FC<Props> = ({
  setOpen,
  selectingLanguage,
  setSelectingLanguage,
}) => {
  const { selectedLanguage } = useContext(Context);
  return (
    <Button
      onClick={() => {
        setOpen(true);
        setSelectingLanguage(!selectingLanguage);
      }}
    >
      {selectedLanguage == "EN" ? (
        <ReactCountryFlag countryCode='US' svg />
      ) : (
        <ReactCountryFlag countryCode='ES' svg />
      )}
    </Button>
  );
};
export default LanguageButton;
