import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
const navLinks = [
  {
    display: "Home",
    link: "/home",
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
    <div className="flex justify-center sticky top-0 backdrop-blur-lg bg-white/80 z-10">
      <div className="container">
        <div className="flex justify-between py-5 text-lg">
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
                  <p className="px-3">{item.display}</p>
                </NavLink>
              );
            })}
          </div>
          <div className="grid text-2xl grid-cols-3 gap-x-2">
            <Link to="/">
              <span className="relative">
                <Icon icon="mdi:heart-outline" />
                <span className="text-sm absolute top-0 right-0 bg-blue-5 rounded-full w-3 h-3 flex items-center justify-center text-white">
                  1
                </span>
              </span>
            </Link>
            <Link to="cart">
              <span className="relative">
                <Icon icon="mdi:cart-outline" />
                <span className="text-sm absolute top-0 right-0 bg-blue-5 rounded-full w-3 h-3 flex items-center justify-center text-white">
                  1
                </span>
              </span>
            </Link>
            <span className="relative">
              <Icon icon="mdi:user-outline" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
