import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Over<span className="text-[#915eff]">view.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          I believe that technology should be built to serve, entertain, and
          inspire people, and that creating intuitive, responsive solutions
          always begins with identifying who we are building a solution for:
        </p>
        <ul className="px-16 py-8 list-disc">
          <li>Where are the opportunities?</li>
          <li>What does the future look like?</li>
          <li>How much is too much?</li>
          <li>Can EVERYONE use it?</li>
        </ul>
        <p>
          As a developer, my job is to be adaptable, forward-thinking,
          minimalist, and in touch with the always expanding needs of people and
          industries from diverse backgrounds.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
