import Typography from "../components/atoms/Typography";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/query";

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
  img: string;
}

const Products = () => {
  const products = useProducts();

  return (
    <section
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 23%)",
        justifyContent: "space-between",
        gap: "1rem"
      }}
    >
      {products.data?.data.map((product: Product) => (
        <Link
          to={`detail/${product.id}`}
          css={{
            textDecoration: "none",
          }}
        >
          <div
            key={product.id}
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <img src={product.img} css={{width: '100%'}}/>
            <Typography variant="h5" color="gray1">
              {product.brand}
            </Typography>
            <Typography variant="h3">{product.name}</Typography>
            <div>
              <Typography variant="h2B" color="primary">
                {`${product.rate}%`}
              </Typography>
              <Typography variant="h2B">{product.price}</Typography>
            </div>
            <Typography variant="h5B" color="gray2">
              {`리뷰 ${product.review}`}
            </Typography>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Products;
