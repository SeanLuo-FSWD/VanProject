import { createContext, Dispatch, SetStateAction } from "react";

interface IGlobalContext {
  currentUser: any | null;
  setCurrentUser: Dispatch<SetStateAction<any | null>>;
  currentMsg: string;
  setCurrentMsg: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext({} as IGlobalContext);
