import Image from "next/image";
import AboutHighlight from "./AboutHighlight";

const AboutMe = () => {
  return (
    <div className="container mx-auto" id="About">
      <div className="mt-10 sm:mt-20">
        <div className="flex justify-center">
          <p className="text-3xl text-primary-dark dark:text-primary-light">
            About Me
          </p>
        </div>
        <div className="block sm:flex sm:gap-10 mt-10">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0 sm:flex flex sm:justify-start justify-center">
            <Image
              src="/images/Developer.png"
              width={200}
              height={200}
              className="rounded-lg"
              alt="Profile Image"
            />
          </div>
          <div className="font-general-regular w-full sm:w-3/4 text-left flex sm:items-center">
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              I&apos;m a FullStack Developer since 2018, I have more than 5
              years of experience as a Full Stack Web Developer, my passion for
              programming forces me to always update my knowledge to apply it to
              all the projects I participate in. Mainly specialized in back-end
              development focused on Nodejs, Express.js, Nest.js, PostgreSQL and
              Mysql. Part of the Front End focused on Vue.js and React. I have
              experience developing different types of web applications such as
              ticket systems, task management systems, business intelligence,
              points of sale, E-Commerce, ERP and CRM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
