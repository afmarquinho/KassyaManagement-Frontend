import "./App.css";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
