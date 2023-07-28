import Helmet from "../components/Helmet";
import banner from "../assets/banner.webp";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import products from "../mocks/products";

const services = [
  {
    icon: "grommet-icons:deliver",
    title: "Free Shipping",
    subtitle: "Shipping Everywhere with free cost.",
  },
  {
    icon: "grommet-icons:deliver",
    title: "Free Shipping",
    subtitle: "Shipping Everywhere with free cost.",
  },
  {
    icon: "grommet-icons:deliver",
    title: "Free Shipping",
    subtitle: "Shipping Everywhere with free cost.",
  },
  {
    icon: "grommet-icons:deliver",
    title: "Free Shipping",
    subtitle: "Shipping Everywhere with free cost.",
  },
];

const Home = () => {
  const [trendingProducts, setTrendingProduct] = useState<Product[]>([]);
  const [bestSalesProducts, setBestSalesProduct] = useState<Product[]>([]);
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProduct(filteredTrendingProducts);
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProduct(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <div className="relative w-full">
          <div className="absolute w-full">
            <p className="text-4xl text-center pt-20 lg:pt-35 font-bold text-slate-100 ">
              Trending product in {new Date().getFullYear()}
            </p>
            <p className="text-center">
              <Link to="/shop">
                <button className="px-5 py-3 rounded-md bg-gray-500/20 hover:bg-gray-500/10 duration-300 text-white font-bold">
                  Shop now
                </button>
              </Link>
            </p>
          </div>
          <div>
            <img
              src={banner}
              alt="banner"
              className="min-h-xs lg:min-h-xl  object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center pt-4">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item) => {
            return <Service {...item} />;
          })}
        </div>
      </section>
      <section className="flex justify-center pt-4">
        <div className="container">
          <h2 className="font-bold text-3xl text-center py-10">
            Trending Products
          </h2>
          <ProductList products={trendingProducts} />
        </div>
      </section>
      <section className="flex justify-center pt-4">
        <div className="container">
          <h2 className="font-bold text-3xl text-center py-10">
            Best Sales Products
          </h2>
          <ProductList products={bestSalesProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
