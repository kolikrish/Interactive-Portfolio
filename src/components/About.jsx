"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="#ffffff"
    glarePosition="bottom"
    glareBorderRadius="20px"
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    tiltEnable={true}
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden lg:overflow-visible">
        <motion.div variants={textVariant()}>
          <p
            className={
              "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
            }
          >
            Introduction
          </p>
          <h2
            className={
              "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            }
          >
            Overview.
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8 text-secondary text-[20px] max-w-4xl font-light mb-18 leading-[40px] lg:leading-[50px]"
        >
          I am a second-year BCA student with a strong focus on web development.
          I am dedicated to honing my skills and am currently engaged in
          real-world projects that allow me to apply my learning in practical
          settings. Additionally, I am an active member of the College Abhyudaya
          Coding Club, where I collaborate with peers on coding challenges and
          projects, further expanding my technical skills and teamwork
          experience.
        </motion.p>
      
      
        <Image
          src={astronaut}
          alt="astronaut"
          className="absolute z-[-1] h-60 lg:h-80 -right-20 animation top-28"
        />
      </div>

      <div className="mt-20 flex-wrap justify-center gap-10 hidden md:flex">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
