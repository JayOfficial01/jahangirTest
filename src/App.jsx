import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard/Dashboard";
import { Navbar } from "./components";

import THEME from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import SidebarProvider from "./context/SidebarContext";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <SidebarProvider>
        <Navbar />
        <Dashboard />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
