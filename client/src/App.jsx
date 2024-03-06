import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import each page from pages folder
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    // Routing
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
