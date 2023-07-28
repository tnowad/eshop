import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Helmet title="Login">
      <section className="flex justify-center">
        <div className="container flex justify-center ">
          <div className="w-[min(100%,_500px)]">
            <h3 className="text-center text-3xl font-bold">Login</h3>
            <div>
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
              <button
                className="flex items-center p-3 shadow-md outline-none bg-white rounded w-full mt-3 justify-center"
                onClick={handleSubmit}
              >
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/signup">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
