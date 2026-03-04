import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We help you reach your target audience and grow your business with our mobile app marketing services.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description:
        "We provide comprehensive dashboard management services to help you monitor and optimize your business performance.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "Fitness app promotion services to help you reach your target audience and grow your business.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Check out some of our recent projects and see how we can help your business grow."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-5-xl">
        {workData.map((works, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col items-center gap-4 bg-primary/10 dark:bg-gray-900/90 rounded-xl p-4 hover:scale-105 duration-500 transition-all cursor-pointer"
          >
            <img src={works.image} alt="" className="w-full rounded-xl" />
            <h4 className="font-medium text-lg">{works.title}</h4>
            <p className="text-sm text-gray-500 dark:text-white/75">
              {works.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
