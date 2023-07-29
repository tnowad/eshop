import React, { useState } from "react";
import Helmet from "../../components/Helmet";
import Product from "../../interfaces/Product";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

const AddProducts = () => {
  const initialProductState: Partial<Product> = {
    productName: "",
    category: "",
    price: 0,
    description: "",
  };

  const [file, setFile] = useState<File | null>(null);

  const [product, setProduct] = useState<Partial<Product>>(initialProductState);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Product data:", product, "Image file:", file);

    if (!file) {
      toast.error("Must add product image");
      return;
    }
    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productsImages/${Date.now() + file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        () => {},
        () => {
          toast.error("Can't upload file");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              ...product,
              imageUrl: downloadURL,
            });
            toast.success("Successfully add product");
          });
        }
      );
    } catch (error) {
      toast.error("Can't add product");
    }

    setProduct(initialProductState);
    setFile(null);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files?.length) {
      const selectedFile = files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Helmet title="Add Products">
      <section className="flex justify-center mt-3">
        <div className="container">
          <div>
            <h4 className="text-xl font-bold mb-4">Add Product</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  className="w-full p-2 border rounded-md"
                  type="text"
                  id="productName"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="w-full p-2 border rounded-md"
                  type="text"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  className="w-full p-2 border rounded-md"
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="imageUrl"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="imageUrl"
                  name="imageUrl"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt="Product Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                  />
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white !bg-blue-5 hover:!bg-blue-7 font-bold py-2 px-4 rounded"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default AddProducts;
