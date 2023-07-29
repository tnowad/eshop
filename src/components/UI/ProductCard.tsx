import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/cartSlice";

import { toast } from "react-toastify";
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
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        id,
        imageUrl,
        productName,
        price,
      })
    );
    toast.info("Product added to cart!");
  };

  return (
    <div>
      <div className="w-full h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt="product image"
          className="hover:scale-102 duration-300 w-full h-full object-fill"
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
          <span onClick={handleAddToCart}>
            <Icon icon="material-symbols:add" />
          </span>
          <span className="px-3">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
