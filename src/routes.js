import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encomendas" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
