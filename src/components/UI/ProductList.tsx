import ProductCard, { ProductCardProps } from "./ProductCard";

interface ProductListProps {
  products: ProductCardProps[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {products.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
