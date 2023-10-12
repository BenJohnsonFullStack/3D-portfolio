import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { scrolltoTop } from "../helpers";
import MolluskLogo from "./MolluskLogo";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
          <MolluskLogo />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            <div className="w-[2px] h-8 bg-[#aaa6c3] ml-8 md:block hidden"></div>
            <span className="md:block hidden pl-8 text-secondary font-medium text-[14px]">
              Full Stack Developer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <HashLink to={`#${link.id}`}>{link.title}</HashLink>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <HashLink to={`#${link.id}`}>{link.title}</HashLink>
                </li>
              ))}
            </ul>
          </div>
          {/* MOBILE MENU */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
