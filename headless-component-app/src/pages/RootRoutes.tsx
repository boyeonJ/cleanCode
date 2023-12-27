import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Coupons from "./Coupons";
import Carts from "./Carts";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/detail/:productId" element={<ProductDetail />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/carts" element={<Carts />} />
    </Routes>
  );
};

export default RootRoutes;
