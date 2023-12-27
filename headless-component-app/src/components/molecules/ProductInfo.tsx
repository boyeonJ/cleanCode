import { Product } from "../../utils/type";
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
      <img src={product.img} css={{ width: "100%", maxWidth: '500px' }} />
      <Typography variant="h6" color="gray1">
        {product.brand}
      </Typography>
      <Typography variant="h4">{product.name}</Typography>
      <div>
        <Typography variant="h3B" color="primary">
          {`${product.rate}%`}
        </Typography>
        <Typography variant="h3B">{product.price}</Typography>
      </div>
      <Typography variant="h6B" color="gray2">
        {`리뷰 ${product.review}`}
      </Typography>
    </div>
  );
};

export default ProductInfo;
