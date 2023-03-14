import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";

const SignUp = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/register",
        {
          name,
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
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
          <div className=" w-11/12 max-w-[700px] px-10 py-12">
            <h1 className="text-4xl font-semibold">Welcome on NGO-Site</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              Welcome! Please enter you details.
            </p>
            <form className="mt-4" onSubmit={handleSignUp}>
              <div className="flex flex-col">
                <label className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter NGO's name"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-lg font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter NGO's email"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-lg font-medium">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="mt-6 flex flex-col gap-y-4 w-1/2">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <p className="font-medium text-base">
                  Already have an account?
                </p>
                <Link to="/login">
                  <button className="ml-2 font-medium text-base text-purple-500">
                    Sign In
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
export default SignUp;
