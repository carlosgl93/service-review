import i18next from "i18next";
import { ContextState } from "./";

type ContextActionType = {
  type: "Context - Translate";
  payload: string;
};

export const ContextReducer = (
  state: ContextState,
  action: ContextActionType
): ContextState => {
  switch (action.type) {
    case "Context - Translate":
      // i18next.changeLanguage(action.payload, (error, t) => {
      //   if (error)
      //     return console.log("something went wrong loading translation", error);
      //   t("key");
      // });
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};
