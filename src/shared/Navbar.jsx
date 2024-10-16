import { Link, NavLink } from "react-router-dom";
import userPic from "../../src/assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <div className="lg:flex lg:gap-2">
        <NavLink to="/"><li className="btn bg-[#0000ff12]  w-full mb-1">Home</li></NavLink>
        <NavLink to="/about"><li className="btn bg-[#0000ff12]  w-full mb-1">About</li></NavLink>
        <NavLink to="/career"><li className="btn bg-[#0000ff12] w-full">Career</li></NavLink>
      
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userPic} />
          </div>
        </div>
        {user ? (
          <button className="btn" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
    {
      user && <h1 className="font-bold text-center my-2"><span className="font-extrabold text-blue-700">{user?.displayName}</span> is here</h1>
    }
    </div>
  );
};

export default Navbar;
