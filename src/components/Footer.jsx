import React, { useState } from "react";
import toast from "react-hot-toast";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  const [email, setEmail] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("email", email);

    formData.append("subject", "New Newsletter Subscription");
    formData.append("from_name", "Digital Agency Website");
    formData.append("message", `New user subscribed with email: ${email}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Subscribed Successfully!");
        setEmail("");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-center pb-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400 flex flex-col items-start"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Company Logo"
            className="w-32 sm:w-44"
          />

          <p className="max-w-md">
            From strategy to execution, we are your trusted partner in digital
            success.
          </p>

          <ul className="pt-4 flex flex-wrap items-center gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                OurWork
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                ContactUs
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 flex flex-col pt-4 gap-4"
        >
          <h3 className="font-semibold text-primary">
            Subscribe to our newsletter
          </h3>

          <form
            onSubmit={onSubmit}
            className="flex gap-2 text-sm w-full max-w-md"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded outline-none dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-600"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 pt-4 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p>© 2026 Digital Agency. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="w-5 cursor-pointer"
          />
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="w-5 cursor-pointer"
          />
          <img
            src={assets.linkedin_icon}
            alt="LinkedIn"
            className="w-5 cursor-pointer"
          />
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            className="w-5 cursor-pointer"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
