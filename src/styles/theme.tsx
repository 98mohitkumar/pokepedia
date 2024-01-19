import { ThemeProvider } from "styled-components";
import theme from "../theme/default";
import GlobalStyles from "./global";
import { ReactNode } from "react";

export type ThemeType = typeof theme;

const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
