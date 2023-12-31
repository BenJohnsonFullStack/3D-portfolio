import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      setSubmitMessage(
        "Oopsie daisy! You forgot to fill out all fields. Self-destruct countdown initiated..."
      );
    } else {
      emailjs
        .send(
          "service_p6an34u",
          "template_d1v8y8f",
          {
            from_name: form.name,
            to_name: "Ben Johnson",
            from_email: form.email,
            to_email: "ben@benjohnsonfullstack.com",
            message: form.message,
          },
          "9XZ5Lzamj_P6uvMA1"
        )
        .then(() => {
          setLoading(false);
          setSubmitMessage(
            "Thanks for your message. It has been queued for inspection by 19 well-trained orangutans. I will get back with you as soon as possible."
          );
          setForm(initialFormValues);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>
          Con<span className="text-[#915eff]">tact.</span>
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="your_name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              id="your_name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you today?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p
            className={
              submitMessage.includes("Oops") ? "text-red-600" : "text-white"
            }
          >
            {submitMessage}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
