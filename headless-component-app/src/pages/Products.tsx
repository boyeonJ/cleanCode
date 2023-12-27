import { Link } from "react-router-dom";
import { useProducts } from "../hooks/query";
import ProductInfo from "../components/molecules/ProductInfo";
import { Product } from "../utils/type";

const Products = () => {
  const products = useProducts();

  return (
    <main css={{ padding: "0 2rem" }}>
      <section
        css={{
          marginTop: '2rem',
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
