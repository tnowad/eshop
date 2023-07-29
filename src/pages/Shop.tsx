import { Icon } from "@iconify/react";
import CommonSection from "../components/CommonSection";
import Helmet from "../components/Helmet";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import ProductList from "../components/UI/ProductList";
import useGetData from "../hooks/useGetData";

const Shop = () => {
  const { data: products } = useGetData<Product>("products");
  const [productsData, setProductsData] = useState<Product[]>(products);

  const [searchForm, setSearchForm] = useState<{
    category: string;
    sortBy: string;
    keyword: string;
  }>({ category: "", sortBy: "", keyword: "" });

  useEffect(() => {
    const filteredProducts = products.filter((item) => {
      let flag = true;
      if (searchForm.category !== "" && item.category !== searchForm.category) {
        flag = false;
      }
      if (
        searchForm.keyword !== "" &&
        !item.productName.includes(searchForm.keyword)
      ) {
        flag = false;
      }
      return flag;
    });

    if (searchForm.sortBy !== "") {
      if (searchForm.sortBy === "asc") {
        filteredProducts.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        );
      } else if (searchForm.sortBy === "des") {
        filteredProducts.sort(
          (a, b) => a.productName.localeCompare(b.productName) * -1
        );
      }
    }

    setProductsData(filteredProducts);
  }, [searchForm, products]);

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section className="flex justify-center pt-4">
        <div className="container">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-y-2">
            <select
              className="p-3 shadow-md outline-none bg-white rounded w-full lg:w-30%"
              onChange={(event) =>
                setSearchForm((value) => ({
                  ...value,
                  category: event.target.value,
                }))
              }
            >
              <option value="">Filter by Category</option>
              <option value="sofa">Sofa</option>
              <option value="chair">Chair</option>
              <option value="phone">Phone</option>
            </select>
            <select
              className="p-3 shadow-md outline-none bg-white rounded w-full lg:w-30%"
              onChange={(event) =>
                setSearchForm((value) => ({
                  ...value,
                  sortBy: event.target.value,
                }))
              }
            >
              <option value="">Sort By</option>
              <option value="asc">Ascending</option>
              <option value="des">Descending</option>
            </select>
            <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full lg:w-30%">
              <input
                type="text"
                placeholder="Search....."
                className="outline-none w-full"
                onChange={(event) =>
                  setSearchForm((value) => ({
                    ...value,
                    keyword: event.target.value,
                  }))
                }
              />
              <Icon icon="material-symbols:search" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center pt-4">
        <div className="container">
          {productsData.length > 0 ? (
            <ProductList products={productsData} />
          ) : (
            <h1 className="text-center text-3xl">No products are found!</h1>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
