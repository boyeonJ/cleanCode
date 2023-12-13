import { Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/detail/:productId" element={<ProductDetail />} />
    </Routes>
  );
};

export default RootRoutes;
