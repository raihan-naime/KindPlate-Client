import { Link } from "react-router";

const Register = () => {
  //   const validatePassword = (password) => {
  //     if (!/[A-Z]/.test(password)) return "Password must have at least one uppercase letter.";
  //     if (!/[a-z]/.test(password)) return "Password must have at least one lowercase letter.";
  //     if (password.length < 6) return "Password must be at least 6 characters long.";
  //     return null;
  //   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>

        <form className="space-y-4">
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

        <button className="btn btn-outline btn-secondary w-full mb-4">
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
