import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes, GLobalStyles } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";
import Aboutus from "pages/Aboutus";
import Login from "pages/auth/Login";
import FAQ from "./pages/FAQ";
import CsvUpload from "pages/CsvUpload";
import SignUp from "./pages/auth/SignUp";
import Privacy from "./pages/Privacy";
import Mission from "pages/Mission";
import Demo from "components/Demo/Demo";

function App() {
  const { theme } = Store();

  return (
    <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
      <GLobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/csv-upload" element={<CsvUpload />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
