import React, { FC, useReducer } from "react";
import { Context } from "./Context";
import { ContextReducer } from "./ContextReducer";

export interface ContextState {
  selectedLanguage: string;
}

const CONTEXT_INITIAL_STATE: ContextState = {
  selectedLanguage: "en",
};

interface Props {
  children: React.ReactNode;
}

const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, CONTEXT_INITIAL_STATE);

  const selectLanguage = (language: string) => {
    dispatch({
      type: "Context - Translate",
      payload: language,
    });
  };

  return (
    <Context.Provider
      value={{
        ...state,

        // methods
        selectLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
