import { createContext } from "react";

const ThemeContext = createContext(["yellow", () => {}]); // default color

export default ThemeContext;
