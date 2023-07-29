import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import AllProducts from "../pages/admin/AllProducts";
import AddProducts from "../pages/admin/AddProducts";
import Orders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";
import Dashboard from "../pages/admin/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />

        <Route path="/dashboard" element={<Navigate to="/dashboard/home" />} />
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/dashboard/all-products" element={<AllProducts />} />
        <Route path="/dashboard/add-products" element={<AddProducts />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
