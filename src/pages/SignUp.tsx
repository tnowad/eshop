import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    file: any | null;
  }>({ username: "", email: "", password: "", file: null });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(false);
    const { username, email, password } = formData;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.file);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadUrl,
          });

          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email,
            photoURL: downloadUrl,
          });
        });
      });
      const { user } = userCredential;
      toast.success("Account created");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
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
                disabled={loading}
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
