import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const AdminHeader = () => {
  const { currentUser } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="flex justify-center sticky top-0 backdrop-blur-lg bg-white/80 z-10">
      <div className="container">
        <div className="flex justify-between py-5 text-lg">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="grid text-2xl grid-cols-3 gap-x-2 flex justify-end">
            <span
              className="relative"
              onClick={() => {
                setIsActiveMenu((value) => !value);
              }}
            >
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  className="w-24px h-24px object-cover rounded-full"
                />
              ) : (
                <Icon icon="mdi:user-outline" />
              )}
              {isActiveMenu && (
                <div className="absolute top-10 -right-10 text-base bg-white w-29 grid p-2 rounded shadow-md">
                  {currentUser ? (
                    <button className="" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link to="/signup">
                        <button className="">Signup</button>
                      </Link>
                      <Link to="/login">
                        <button className="">Login</button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
