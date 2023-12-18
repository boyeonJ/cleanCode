import http from "../config";

//상품
export const getProducts = () => http.get("/products");
export const postProducts = () => http.post("/products");
export const putProducts = (id:number) => http.put("/products",id);
export const deleteProducts = () => http.delete("/products");

//장바구니
export const getCarts = () => http.get("/carts");
export const postCarts = () => http.post("/carts");
export const putCarts = (id:number) => http.put("/carts",id);
export const deleteCarts = () => http.delete("/carts");

//구매
export const getPurchases = () => http.get("/purchases");
export const postPurchases = () => http.post("/purchases");
export const putPurchases = (id:number) => http.put("/purchases",id);
export const deletePurchases = () => http.delete("/purchases");

//쿠폰
export const getCoupons = () => http.get("/coupons");
export const postCoupons = () => http.post("/coupons");
export const putCoupons = (id:number) => http.put("/coupons",id);
export const deleteCoupons = () => http.delete("/coupons");