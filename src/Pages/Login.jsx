import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";


const Login = () => {
  const { signInUser, googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({email, password});

    signInUser(email, password)
      .then((data) => {
        setUser(data.user);

        location.state ? navigate(location.state) : navigate("/");
        toast.success("Logged in");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        location.state ? navigate(location.state) : navigate("/");
        toast.success("Logged In");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="">
      <div className="min-h-screen  flex items-center justify-center bg-gray-50 px-5">
        <div className="max-w-md w-full bg-gray-900 text-gray-100 rounded-xl p-8  shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">
            Login to KindPlate
          </h2>

          <form onSubmit={handleSignIn} className="space-y-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-400 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-700 bg-gray-900 focus:border-purple-400 outline-none px-4 py-3 text-gray-100"
            />
            <label
              htmlFor="username"
              className="block text-sm text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-700 bg-gray-900 focus:border-purple-400 outline-none px-4 py-3 text-gray-100"
            />

            <button
              type="submit"
              className="w-full bg-purple-400 text-gray-900 font-semibold rounded-md py-3 hover:bg-purple-500 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2 pt-6">
            <div className="h-px bg-gray-700 flex-1"></div>
            <p className="text-sm text-gray-400">Login with social accounts</p>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          {/* Social buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm hover:bg-gray-800 transition"
            >
              <FaGoogle
                onClick={handleGoogleLogIn}
                className="w-5 h-5 text-white"
              />
            </button>

            <button
              aria-label="Log in with Twitter"
              className="p-3 rounded-sm hover:bg-gray-800 transition"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </button>

            <button
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm hover:bg-gray-800 transition"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </button>
          </div>

          <p className="text-center text-sm">
            Don't have an account?
            <Link to="/register" className="text-gray-100 hover:underline hover:text-purple-400">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
