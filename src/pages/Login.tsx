import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const handleSubmit = async () => {
    const { email, password } = formData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
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
