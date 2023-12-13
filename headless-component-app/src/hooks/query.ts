
import { useQuery } from "react-query";
import { getProduct } from "../server/apis/api/product";

export const useProducts = () => useQuery("products", getProduct);