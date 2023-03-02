import Product, { IProduct } from './Product';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className='product-list'>
      {props.products.map((product, idx) => (
        <Product product={product} key={idx} />
      ))}
    </div>
  );
};

export default ProductList;
