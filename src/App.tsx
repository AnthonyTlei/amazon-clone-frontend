import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";

function App() {
  return <ThemeProvider theme={theme}>Hello World</ThemeProvider>;
}

export default App;
