import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import RegisterPage from "./pages/Register.page";
import SigninPage from "./pages/Signin.page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
