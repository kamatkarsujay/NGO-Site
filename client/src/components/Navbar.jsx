import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URI } from "../utils/helper";

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser.user);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.clear();
    setUser({});
    await axios.post(`${BASE_URI}/logout`, {}, { withCredentials: true });
  };

  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "sticky top-0 z-30 relative shadow-lg bg-violet-500 shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className={
                (props.transparent ? "text-white" : "text-white") +
                " text-sm font-bold leading-relaxed inline-block ml-8 py-2 whitespace-nowrap uppercase"
              }
            >
              NGO Site
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-white") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {Object.keys(user).length !== 0 ? (
              <ul className="flex flex-col lg:flex-row list-none mr-8 lg:ml-auto">
                <li className="flex items-center">
                  <Link to="/">
                    <button
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-white text-white"
                          : "text-white hover:text-white") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      }
                    >
                      Home
                    </button>
                  </Link>
                </li>

                {user.role === "admin" ? (
                  <li className="flex items-center">
                    <Link to="/dashboardAdmin">
                      <button
                        className={
                          (props.transparent
                            ? "lg:text-white lg:hover:text-white text-white"
                            : "text-white hover:text-white") +
                          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                        }
                      >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li className="flex items-center">
                    <Link to="/dashboard">
                      <button
                        className={
                          (props.transparent
                            ? "lg:text-white lg:hover:text-white text-white"
                            : "text-white hover:text-white") +
                          " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                        }
                      >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                )}

                <li className="flex items-center">
                  <Link to="/login">
                    <button
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-white text-white"
                          : "text-white hover:text-white") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      }
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col lg:flex-row list-none mr-8 lg:ml-auto">
                <li className="flex items-center">
                  <Link to="/">
                    <button
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-white text-white"
                          : "text-white hover:text-white") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      }
                    >
                      Home
                    </button>
                  </Link>
                </li>

                <li className="flex items-center">
                  <Link to="/login">
                    <button
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-white text-white"
                          : "text-white hover:text-white") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      }
                    >
                      Login
                    </button>
                  </Link>
                </li>

                <li className="flex items-center">
                  <Link to="/register">
                    <button
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-white text-white"
                          : "text-white hover:text-white") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      }
                    >
                      Sign up
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
