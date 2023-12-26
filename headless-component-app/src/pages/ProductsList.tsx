import Typography from "../components/atoms/Typography";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/query";
import ProductInfo from "../components/molecules/ProductInfo";

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
    <main css={{ padding: "0 2rem" }}>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 23%)",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {products.data?.data.map((product: Product) => (
          <Link
            to={`detail/${product.id}`}
            css={{
              textDecoration: "none",
            }}
          >
            <ProductInfo {...product} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Products;
