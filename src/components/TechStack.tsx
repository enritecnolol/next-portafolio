'use client'

import Image from "next/image";
import { techStack } from "../data/techStack";
import Slider from "./Slider";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="mt-10" id="TechStack">
      <div className="flex justify-center">
        <p className="text-3xl text-primary-dark dark:text-primary-light">
          Tech Stack
        </p>
      </div>
      <div className="mt-5 w-full">
        <Slider options={{ align: "center" }}>
          {techStack.map(({ name, img }) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.7,
                  delay: 0.15,
                }}
                key={name}
                className="w-48"
              >
                <div className="w-48 h-48 rounded-xl shadow-lg p-10 hover:shadow-xl bg-secondary-light dark:bg-ternary-dark flex justify-center items-center">
                  <div className="">
                    <Image
                      src={img}
                      className="rounded-t-xl border-none"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TechStack;
