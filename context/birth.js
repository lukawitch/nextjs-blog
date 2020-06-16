import { createContext } from "react";
import { birth } from "../model/birth";

export const birthContext = createContext(new birth());
