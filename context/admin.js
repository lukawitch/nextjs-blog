import { createContext } from "react";
import { admin } from "../model/admin";

export const adminContext = createContext(new admin());
