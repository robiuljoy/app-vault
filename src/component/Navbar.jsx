import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <li className=" text-lg hover:text-[#9F62F2] hover:underline font-medium text-[#000000E6]">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="ml-8 text-lg hover:text-[#9F62F2] hover:underline font-medium text-[#000000E6]">
        <NavLink to="/apps">Apps</NavLink>
      </li>

      <li className="ml-8  text-lg hover:text-[#9F62F2] hover:underline font-medium text-[#000000E6]">
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar pt-3 ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img className="w-10 h-10" src={logoImg} alt="" />{" "}
          <span className="lg:text-lg text-sm font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            App Vault
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/robiuljoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn mr-5 md:py-6 md:px-8 text-white p-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg flex items-center gap-2">
            <Github /> Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
