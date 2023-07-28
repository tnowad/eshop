import Router from "../../routers";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
