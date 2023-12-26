import { Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import CouponsList from "./CouponsList";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/detail/:productId" element={<ProductDetail />} />
      <Route path="/coupons" element={<CouponsList />} />
    </Routes>
  );
};

export default RootRoutes;
