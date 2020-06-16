import { createContext } from "react";
import { SigninUp } from "../model/signinup";

export const signinUpContext = createContext(new SigninUp());
