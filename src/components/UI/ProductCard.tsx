import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export interface ProductCardProps {
  id: string;
  imageUrl: string;
  productName: string;
  category: string;
  price: number;
}

const ProductCard = ({
  id,
  imageUrl,
  productName,
  category,
  price,
}: ProductCardProps) => {
  return (
    <div>
      <div>
        <img
          src={imageUrl}
          alt="product image"
          className="hover:scale-102 duration-300"
        />
      </div>
      <div className="p-3">
        <div>
          <Link to={`/shop/${id}`}>
            <h3 className="font-bold text-xl">{productName}</h3>
          </Link>
          <p className="font-light text-center">{category}</p>
        </div>
        <div className="flex items-center justify-between">
          <Icon icon="material-symbols:add" />
          <span className="px-3">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
