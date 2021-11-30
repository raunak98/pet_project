import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import RegisterCandidates from "./components/Register/registerCandidates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/registerCandiates"
            element={<RegisterCandidates />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
