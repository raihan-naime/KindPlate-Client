import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, googleSignIn, updateUserProfile } = use(AuthContext);
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    // console.log({ name, photoURL, email, password });

    // password validation
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one uppercase letter.')
      setError('Password must contain at least one uppercase letter.')
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.")
      setError("Password must contain at least one lowercase letter.")
      return ;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.")
      setError("Password must be at least 6 characters long.")
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    createUser(email, password)
      .then((user) => {
        const data = user.user;
        updateUserProfile(profile)
        .then(()=>{
          setUser({...data, profile})
        })
        toast.success("logged in");
        location.state ? navigate(location.state) : navigate('/')
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        location.state ? navigate(location.state) : navigate('/')
        toast.success("Logged In");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-md w-full bg-gray-900 text-gray-100 rounded-xl p-8  shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">
            Create an Account
          </h2>

        <form onSubmit={handleCreateUser} className="space-y-4">
          <label
              htmlFor="name"
              className="block text-sm text-gray-400 mb-1"
            >
              Name
            </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-700 bg-gray-900 focus:border-purple-400 outline-none px-4 py-3 text-gray-100"
          />
          <label
              htmlFor="email"
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
              htmlFor="photo"
              className="block text-sm text-gray-400 mb-1"
            >
              Photo
            </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full rounded-md border border-gray-700 bg-gray-900 focus:border-purple-400 outline-none px-4 py-3 text-gray-100"
          />
          <label
              htmlFor="password"
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
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

          <button type="submit" className="w-full bg-purple-400 text-gray-900 font-semibold rounded-md py-3 hover:bg-purple-500 transition">
            Register
          </button>
        </form>

        {/* Divider */}
          <div className="flex items-center gap-2 pt-6">
            <div className="h-px bg-gray-700 flex-1"></div>
            <p className="text-sm text-gray-400">Login with social accounts</p>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>
          
          <p className="text-red-500">{error}</p>

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
          Already have an account?{" "}
          <Link to="/login" className="text-gray-100 hover:underline hover:text-purple-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
