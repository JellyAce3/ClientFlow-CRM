import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ContactProvider } from "./components/context/ContactContext";
import { ThemeProvider } from "./components/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
       <ContactProvider>
        <App />
      </ContactProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);