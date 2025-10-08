'use client'
import { motion } from "framer-motion";

import Image from "next/image";
import heroImg from "../assets/user.svg"
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <section className={`relative z-[-1] w-full h-screen mx-auto banner overflow-hidden`}>

      <div
        className={`absolute inset-0 top-[150px] right-40 z-[-1] animation max-w-6xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-2`}>
        <div data-scroll data-scroll-speed='0.4'>
          <h1 className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-30 lg:mt-40 text-white`}>
            Hi, I'm <p className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 text-[60px] lg:text-[110px]'>Krish Koli</p>
          </h1>
        </div>
      </div>

      <div className="sliderContainer md:z-[-10]">
        <div ref={slider} className="slider overflow-hidden text-secondary text-[40px] lg:text-[150px] lg:mt-20 mt-40">
          <p ref={firstText} >Full-Stack Developer.</p>
          <p ref={secondText}>Full-Stack Developer.</p>
        </div>
      </div>

      <Image loading="lazy" src={heroImg} alt="hero" className="z-[-2] absolute bottom-24 right-0 animation" />

    </section>
  );
};

export default Hero;
