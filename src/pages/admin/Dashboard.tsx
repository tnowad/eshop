import Helmet from "../../components/Helmet";
import useGetData from "../../hooks/useGetData";
import Product from "../../interfaces/Product";
import User from "../../interfaces/User";

const Dashboard = () => {
  // Fetch product and user data using the useGetData hook
  const { data: products } = useGetData<Product>("products");
  const { data: users } = useGetData<User>("users");

  const totalProducts = products.length;
  const totalUsers = users.length;

  const averagePrice =
    totalProducts > 0
      ? products.reduce((acc, product) => acc + product.price, 0) /
        totalProducts
      : 0;

  const averageRating =
    totalProducts > 0
      ? products.reduce((acc, product) => acc + product.avgRating!, 0) /
        totalProducts
      : 0;

  return (
    <Helmet>
      <section className="flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card for total number of products */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Products</h2>
              <p className="text-4xl font-bold">{totalProducts}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Users</h2>
              <p className="text-4xl font-bold">{totalUsers}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Average Price</h2>
              <p className="text-4xl font-bold">${averagePrice.toFixed(2)}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Average Rating</h2>
              <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Dashboard;
