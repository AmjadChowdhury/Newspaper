import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(name,email,password)
  };

  return (
    <div>
      <Navbar></Navbar>  
      <div className="flex justify-center mt-5 lg:mt-10">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl font-bold text-center my-5">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-black text-white text-xl font-semibold hover:bg-slate-400">
                Register
              </button>
            </div>
            <p>
              Already have an account !!!
              <Link to="/login" className="font-semibold text-cyan-950">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
