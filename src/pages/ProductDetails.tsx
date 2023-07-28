import { Navigate, useParams } from "react-router-dom";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet";
import products from "../mocks/products";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/storeHook";
import { addCartItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import StarInput from "../components/UI/StartInput";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const dispatch = useAppDispatch();

  const [review, setReview] = useState<{ rating: number; text: string }>({
    rating: 5,
    text: "",
  });

  if (!product) {
    return <Navigate to="/not-found" />;
  }
  const {
    productName,
    category,
    imageUrl,
    price,
    reviews,
    description,
    avgRating,
  } = product;

  const relatedProducts = products.filter(
    (item) => item.category == product.category
  );

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
  const handleReview = () => {
    console.log(review);
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="flex justify-center pt-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 justify-center items-center">
            <div className="lg:h-100 lg:w-100">
              <img
                src={imageUrl}
                alt={productName}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div>
                <h2 className="text-bold text-2xl">{productName}</h2>
                <span className="capitalize text-gray mt-2">{category}</span>
                <div className="pt-2 flex text-md items-center">
                  <StarInput value={avgRating} />
                  <p className="text-gray">
                    (<span className="text-amber">{avgRating}</span>
                    ratings)
                  </p>
                </div>

                <span className="text-xl font-bold pt-2">${price}</span>
                <p className="text-gray pt-2">{description}</p>
                <button
                  className="mt-3 p-3 shadow-md outline-none bg-white rounded w-full"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-2">
        <div className="container">
          <h1 className="font-bold text-xl">Review ({reviews.length})</h1>
          <div>
            {reviews.map((item) => (
              <div key={item.id} className="pt-3">
                <StarInput value={avgRating} />
                <span className="text-gray">
                  (<span className="text-amber">{avgRating}</span>
                  ratings)
                </span>
                <div>{item.text}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-center">
            <div className="w-[min(800px,_100%)]">
              <h2 className="text-xl font-bold">Leave your review:</h2>

              <div className="mt-2">
                <StarInput
                  value={review.rating}
                  onChange={(rating) => {
                    setReview((value) => ({ ...value, rating }));
                  }}
                />
              </div>
              <textarea
                placeholder="Message..."
                value={review.text}
                onChange={(event) => {
                  setReview((value) => ({
                    ...value,
                    text: event.target.value,
                  }));
                }}
                className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full"
              />
              <button
                className="mt-2 flex items-center justify-center p-3 shadow-md outline-none bg-white rounded w-full"
                onClick={handleReview}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="container">
          <h1 className="text-xl font-bold">You might also like</h1>
          <ProductList products={relatedProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
