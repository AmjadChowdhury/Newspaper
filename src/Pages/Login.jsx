import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  console.log('In login page ',location)
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //Reset..
    setSuccess('')
    setLoginError('')
  
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(`${result.user.displayName} login successfully`);
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center mt-5 lg:mt-10">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl font-bold text-center my-5">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-base"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-black text-white text-xl font-semibold hover:bg-slate-400">
                Login
              </button>
            </div>
            <p>
              You have no account ? Please
              <Link to="/register" className="font-semibold text-cyan-950">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      { 
        success && 
        <h1 className="text-2xl font-extrabold text-green-600 text-center my-5">{success}</h1>
      }
      {
        loginError && 
        <h1 className="text-2xl font-extrabold text-red-600 text-center my-5">{loginError}</h1>
      }
    </div>
  );
};

export default Login;
