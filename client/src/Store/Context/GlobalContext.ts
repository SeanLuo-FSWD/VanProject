import { createContext, Dispatch, SetStateAction } from "react";
import { ICurrentUser } from "../../Interfaces";

interface IGlobalContext {
  currentUser: ICurrentUser | null;
  setCurrentUser: Dispatch<SetStateAction<any | null>>;
  currentMsg: string;
  setCurrentMsg: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext({} as IGlobalContext);
