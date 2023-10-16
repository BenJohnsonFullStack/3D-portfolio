/* eslint-disable react/no-unescaped-entities */

import { styles } from "../style";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="h-full">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-80 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Ben.</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I design, develop, and deploy clean, lightweight web applications
              and software built to make life better and more fun for{" "}
              <span className="text-[#915eff]">everyone.</span>
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-14 h-full mt-28">
              {socials.map((social) => (
                <div
                  key={social.id}
                  className="sm:w-22 sm:h-22 w-12 h-12 cursor-pointer"
                >
                  <Link to={social.url} target="_blank">
                    <img src={social.icon} alt="social media icon" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
