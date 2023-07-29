import { useLocation } from "react-router-dom";
import Router from "../../routers";
import Footer from "../Footer";
import Header from "../Header";
import AdminHeader from "../Header/AdminHeader";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? (
        <AdminHeader />
      ) : (
        <Header />
      )}
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
