import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    file: object | null;
  }>({ username: "", email: "", password: "", file: null });
  const handleSubmit = () => {
    console.log(typeof formData.file);
  };

  return (
    <Helmet title="Login">
      <section className="flex justify-center">
        <div className="container flex justify-center ">
          <div className="w-[min(100%,_500px)]">
            <h3 className="text-center text-3xl font-bold">Sign Up</h3>
            <div>
              <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3">
                <input
                  type="username"
                  value={formData.username}
                  onChange={(event) => {
                    setFormData((value) => ({
                      ...value,
                      username: event.target.value,
                    }));
                  }}
                  placeholder="Enter your username..."
                  className="outline-none w-full"
                />
              </div>
              <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => {
                    setFormData((value) => ({
                      ...value,
                      email: event.target.value,
                    }));
                  }}
                  placeholder="Enter your email..."
                  className="outline-none w-full"
                />
              </div>
              <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(event) => {
                    setFormData((value) => ({
                      ...value,
                      password: event.target.value,
                    }));
                  }}
                  placeholder="Enter your password..."
                  className="outline-none w-full"
                />
              </div>
              <div className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3">
                <input
                  type="file"
                  onChange={(event) =>
                    setFormData((value) => ({
                      ...value,
                      file: event.target.files?.item(0) as object,
                    }))
                  }
                />
              </div>
              <button
                className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3 justify-center"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default SignUp;
