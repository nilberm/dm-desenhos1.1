import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./components/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
