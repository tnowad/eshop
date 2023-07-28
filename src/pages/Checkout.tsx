import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet";
import { useAppSelector } from "../hooks/storeHook";

const Checkout = () => {
  const { totalAmount, totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="flex justify-center mt-3">
        <div className="container grid grid-cols-[80%_20%] gap-3">
          <div>
            <h6>Billing information</h6>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Enter your name..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Enter your email..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Phone number..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Stress address..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="City..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Postal Code..."
              />
            </div>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-2">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Country..."
              />
            </div>
          </div>
          <div>
            <div>
              <h6 className="flex justify-between">
                Total Quantity:{" "}
                <span className="font-bold">{totalQuantity} items</span>
              </h6>
              <h6 className="flex justify-between">
                Subtotal: <span className="font-bold">${totalAmount}</span>
              </h6>
              <h6 className="flex justify-between">
                Shipping: <span className="font-bold">$0</span>
              </h6>
              <h6>Free shipping</h6>
              <h6 className="flex justify-between">
                Total cost: <span className="font-bold">${totalAmount}</span>
              </h6>
            </div>
            <button className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full">
              Place an order
            </button>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
