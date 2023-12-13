import Typography from "../atoms/Typography";
import colors from "../atoms/Color";
import { useEffect, useState } from "react";
import { getProduct } from "../server/apis/api/product";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
}

const Products = () => {
  const query = useQuery("products", getProduct);
  // const fetchPosts = async () => {
  //   const res: AxiosRequestConfig<{ products: Product[] }> = await getProduct();

  //   setProducts(res?.data?.products ?? []);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <section
      css={{
        border: `1px solid ${colors["black"]}`,
        display: "grid",
        gridTemplateColumns: "repeat(4, 23%)",
        justifyContent: "space-between",
      }}
    >
      {query.data?.data.products.map((product: Product) => (
        <Link to={`detail/${product.id}`} css={{
          textDecoration: 'none'
        }}>
          <div
            key={product.id}
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography variant="h4" color="gray1">
              {product.brand}
            </Typography>
            <Typography variant="h2">{product.name}</Typography>
            <div>
              <Typography variant="h1B" color="primary">
                {product.rate}
              </Typography>
              <Typography variant="h1B">{product.price}</Typography>
            </div>
            <Typography variant="h4B" color="gray2">
              {`리뷰 ${product.review}`}
            </Typography>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Products;
