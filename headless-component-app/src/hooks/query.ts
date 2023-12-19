
import { useQuery } from "react-query";
import { getProducts } from "../server/apis/api/product";

export const useProducts = () => useQuery("products", getProducts);