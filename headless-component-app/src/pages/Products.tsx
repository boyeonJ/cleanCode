import Typography from "../atoms/Typography";
import colors from "../atoms/Color";
import { useEffect, useState } from "react";
import { getProduct } from "../server/apis/api/product";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const query = useQuery('products', getProduct);
  console.log(query);
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
      {products.map((product: Product) => (
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
      ))}
    </section>
  );
};

export default Products;
