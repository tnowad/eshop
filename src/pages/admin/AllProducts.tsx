import { Icon } from "@iconify/react";
import Helmet from "../../components/Helmet";
import useGetData from "../../hooks/useGetData";
import Product from "../../interfaces/Product";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: products } = useGetData<Product>("products");

  const handleEdit = (productId: string) => {
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleDelete = (productId: string) => {
    deleteDoc(doc(db, "products", productId));
    toast.success("Successfully deleted product!");
  };

  return (
    <Helmet title="All Products">
      <section className="flex justify-center">
        <div className="container">
          <table className="table w-full mt-3 text-center">
            <thead>
              <tr className="border-b">
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:shadow-sm hover:bg-slate-1/20 border-b"
                >
                  <th className="flex justify-center">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-20"
                    />
                  </th>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      <Icon icon="material-symbols:edit-outline" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Icon icon="material-symbols:delete-outline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Helmet>
  );
};

export default AllProducts;
