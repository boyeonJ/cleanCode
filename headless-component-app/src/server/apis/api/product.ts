import http from "../config"

export const getProduct = () => {
    return http.get('/products');
}