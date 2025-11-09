import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const Login = () => {

    const {signInUser, googleSignIn, setUser} = use(AuthContext);
    console.log(googleSignIn);
    
    const handleSignIn = (e) =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email, password});
         
        signInUser(email, password)
        .then(data => {
            setUser(data.user);
            alert('Logged in')
        })
        .catch(error => {
            console.log(error);
            alert('Error')
            
        })
    }

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(result => {
            setUser(result.user);
            alert('Logged In')
        })
        .catch(error => {
            console.log(error);
            alert('Error')
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Login to PlateShare
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            
            className="input input-bordered w-full"
            
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            
            className="input input-bordered w-full"
            
          />

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline btn-secondary w-full mb-4"
        >
          Login with Google
        </button>

        <p className="text-center text-sm">
          New to PlateShare?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
