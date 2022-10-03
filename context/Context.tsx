import { createContext } from "react";

interface ContextProps {
  selectedLanguage: string;
  selectLanguage: (language: string) => void;
}
export const Context = createContext({} as ContextProps);
