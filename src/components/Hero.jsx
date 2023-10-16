/* eslint-disable react/no-unescaped-entities */

import { styles } from "../style";
import { AvatarCanvas } from "./canvas";

const Hero = () => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="h-full">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
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
          </div>
        </div>
        {isMobile && (
          <div className="h-full">
            <AvatarCanvas />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
