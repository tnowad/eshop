import { Icon } from "@iconify/react";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet";
import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { removeCartItem, updateCartItem } from "../redux/slices/cartSlice";

const Cart = () => {
  const { cartItems, totalAmount, totalQuantity } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="flex justify-center">
        <div className="container">
          <div className="grid lg:grid-cols-[80%_20%]">
            <table className="table w-full mt-3">
              <thead>
                <tr className="border-b">
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:shadow-sm hover:bg-slate-1/20 border-b"
                  >
                    <th className="flex justify-center">
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-20"
                      />
                    </th>
                    <th>{item.productName}</th>
                    <th>${item.price}</th>
                    <th>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(event) => {
                          dispatch(
                            updateCartItem({
                              item,
                              quantity: event.target.value,
                            })
                          );
                        }}
                      />
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          dispatch(removeCartItem(item.id));
                        }}
                      >
                        <Icon icon="material-symbols:delete-outline" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h2>Subtotal</h2>
              <span>{totalAmount}</span>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Cart;
