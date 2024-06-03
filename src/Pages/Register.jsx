import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [success,setSuccess] = useState('')
  const [registerError,setRegisterError] = useState('')  


  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    //Reset...
    setSuccess('')
    setRegisterError('')

    console.log(name,email,password)
    createUser(email,password)
    .then(result => {
        console.log(result.user)
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            alert('Progile updated')
            console.log(auth.currentUser)
            setSuccess(`${auth.currentUser.displayName} Register account successfully`);
          }).catch((error) => {
            console.log(error.message)
            setRegisterError(error.message)
          });
    })
    .catch(error => {
        console.log(error.message)
        setRegisterError(error.message)
    })

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
      {
        success && 
        <h1 className="text-2xl font-extrabold text-green-600 text-center my-5">{success}</h1>
      }
      {
        registerError && 
        <h1 className="text-2xl font-extrabold text-red-600 text-center my-5">{registerError}</h1>
      }
      
    </div>
  );
};

export default Register;
