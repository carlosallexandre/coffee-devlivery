import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world</h1>

      <GlobalStyles />
    </ThemeProvider>
  );
}
