import Helmet from "../components/Helmet";
import banner from "../assets/banner.webp";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import chair from "../assets/chair.png";

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

const products: Product[] = [
  {
    id: "2",
    category: "chair",
    imageUrl: chair,
    price: 150,
    productName: "Fake Chair 1",
  },
  {
    id: "3",
    category: "chair",
    imageUrl: chair,
    price: 180,
    productName: "Fake Chair 2",
  },
  {
    id: "4",
    category: "chair",
    imageUrl: chair,
    price: 220,
    productName: "Fake Chair 3",
  },
  {
    id: "5",
    category: "chair",
    imageUrl: chair,
    price: 80,
    productName: "Fake Chair 4",
  },
  {
    id: "6",
    category: "chair",
    imageUrl: chair,
    price: 120,
    productName: "Fake Chair 5",
  },
  {
    id: "7",
    category: "chair",
    imageUrl: chair,
    price: 190,
    productName: "Fake Chair 6",
  },
  {
    id: "8",
    category: "chair",
    imageUrl: chair,
    price: 160,
    productName: "Fake Chair 7",
  },
  {
    id: "9",
    category: "chair",
    imageUrl: chair,
    price: 250,
    productName: "Fake Chair 8",
  },
  {
    id: "10",
    category: "sofa",
    imageUrl: chair,
    price: 350,
    productName: "Fake Sofa 1",
  },
  {
    id: "11",
    category: "sofa",
    imageUrl: chair,
    price: 280,
    productName: "Fake Sofa 2",
  },
  {
    id: "12",
    category: "sofa",
    imageUrl: chair,
    price: 400,
    productName: "Fake Sofa 3",
  },
  {
    id: "13",
    category: "sofa",
    imageUrl: chair,
    price: 500,
    productName: "Fake Sofa 4",
  },
  {
    id: "14",
    category: "sofa",
    imageUrl: chair,
    price: 420,
    productName: "Fake Sofa 5",
  },
  {
    id: "15",
    category: "sofa",
    imageUrl: chair,
    price: 380,
    productName: "Fake Sofa 6",
  },
  {
    id: "16",
    category: "sofa",
    imageUrl: chair,
    price: 320,
    productName: "Fake Sofa 7",
  },
  {
    id: "17",
    category: "sofa",
    imageUrl: chair,
    price: 450,
    productName: "Fake Sofa 8",
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
  });

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
