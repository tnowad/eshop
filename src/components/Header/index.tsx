import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const navLinks = [
  {
    display: "Home",
    link: "/",
  },
  {
    display: "Shop",
    link: "/shop",
  },
  {
    display: "Cart",
    link: "/cart",
  },
];

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex justify-between py-5">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex">
            {navLinks.map((item) => {
              return (
                <NavLink
                  to={item.link}
                  key={item.link}
                  className={({ isActive }) => {
                    return isActive ? "font-bold" : "font-light";
                  }}
                >
                  <p className="px-3 text-lg">{item.display}</p>
                </NavLink>
              );
            })}
          </div>
          <div>user</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
