import React from "react";
import logoImg from "../assets/logo.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#001931] text-primary-content p-10">
      <aside>
        <img
          className="md:w-50 md:h-50 w-30 h-30 flex justify-between items-center"
          src={logoImg}
          alt=""
        />
        <p className="font-bold">
          App Vault
          <br />
          Providing reliable platform since 2014
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="cursor-pointer">
            <Facebook />
          </a>
          <a className="cursor-pointer">
            <Youtube />
          </a>
          <a className="cursor-pointer">
            <Twitter />
          </a>
          <a className="cursor-pointer">
            <Instagram />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
