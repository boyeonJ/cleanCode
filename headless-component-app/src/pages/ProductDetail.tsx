import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/query';
import { Product } from './ProductsList';

const ProductDetail = () => {
    const { productId }  = useParams();
    const products = useProducts();
    const detailInfo = {...products.data?.data.filter((product: Product)=>product.id===Number(productId))[0]};

    console.log(detailInfo);

    return <h1>{detailInfo.name}</h1>;
}

export default ProductDetail;