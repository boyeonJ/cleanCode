import {Product} from "../../pages/ProductsList";
import Typography from "../atoms/Typography";

const ProductInfo = (product: Product) => {
  return (
    <div
      key={product.id}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <img src={product.img} css={{ width: "100%" }} />
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
  );
};

export default ProductInfo;
