import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { scrolltoTop } from "../helpers";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            scrolltoTop();
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ben Johnson{" "}
            <span className="sm:block hidden">Full Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <HashLink to={`#${link.id}`}>{link.title}</HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
