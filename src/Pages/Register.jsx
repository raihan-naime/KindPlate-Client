import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, googleSignIn } = use(AuthContext);
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
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.")
      return ;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.")
      return;
    }

    createUser(email, password)
      .then((user) => {
        const data = user.user;
        setUser(data);
        location.state ? navigate(location.state) : navigate('/')
        toast.success("logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("error");
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
        console.log(error);
        toast.error("Error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleCreateUser} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline btn-secondary w-full mb-4"
        >
          Register with Google
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
