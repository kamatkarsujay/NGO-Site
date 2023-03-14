import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";
import { BASE_URI } from "../utils/helper";

const Login = () => {
  const navigate = useNavigate();
  const cookies = useCookies([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URI}/login`,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen">
        <div className="w-full flex bg-white border-2 lg:m-12 rounded-xl border-gray-100 shadow-xl">
          <div className=" w-11/12 max-w-[700px] px-10 py-20">
            <h1 className="text-4xl font-semibold">Welcome Back</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              Welcome back! Please enter you details.
            </p>
            <form className="mt-8" onSubmit={handleSignIn}>
              <div className="flex flex-col">
                <label className="text-lg font-medium">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-lg font-medium">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  type={"password"}
                  required
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button className="font-medium text-base text-purple-500">
                  Forgot password?
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="mt-6 flex flex-col gap-y-4 w-1/2">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-purple-500 rounded-xl text-white font-bold text-lg"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">Don't have an account?</p>
                <Link to="/register">
                  <button className="ml-2 font-medium text-base text-purple-500">
                    Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="hidden relative w-1/2 lg:flex items-center justify-center">
            <img
              src={require("../assets/img/13451280_5266634.jpg")}
              alt="Child Labour"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};
export default Login;
