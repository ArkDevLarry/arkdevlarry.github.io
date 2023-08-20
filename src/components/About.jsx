import { React } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Modalit } from "./../components"

import { logo } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] md:w-5/12 w-full serviceCard'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-row kingrow justify-between">
        <div className="fcrow w-full sm:w-10/12 md:w-7/12 lg:w-7/12 xl:w-7/12">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Overview</p>
            <h2 className={styles.sectionHeadText}>Introduction.</h2>
          </motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I'm a skilled software developer with experience in PHP, JavaScript, and expertise in frameworks like 
            React, Laravel, Laravel Livewire. 
            Also with basic understanding and application of docker (containerization platform). 
            I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. I am excited to work on your project, 
            Let's work together to bring your ideas to life!
          </motion.p>
        </div>
        <div className="scrow w-full sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-3/12">
          <Tilt className='w-full'>
            <motion.div>
              <img src={ logo } className="w-full" alt="" />
            </motion.div>
          </Tilt>
        </div>
      </div>

      <div className="flex flex-row krow2 justify-between mt-10">
        <div className="subrow1 xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-10/12">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText2}>Background.</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='w-full mt-4 text-secondary text-[17px] leading-[30px]'>
            From my early days, I earned a reputation for devouring mobile data, depleting others phone batteries, 
            and disassembling every piece of technology within my reach, armed with my trusty screwdriver. 
            Driven by an insatiable curiosity about how machines tick, I received my fair share of scoldings. 
            While the term 'passion for technology' hadn't yet entered my lexicon, I was undeniably captivated by the world of machines.
            As time flowed, my journey brought me face-to-face with my true calling—technology. 
            I embarked on a path of discovery and learning, diving into the intricacies of technology and its underlying principles. 
            The moment of realization was transformative, and I grasped the immense potential that lay in understanding and harnessing technology.
            Today, looking back, I am immensely grateful for seizing that pivotal moment. 
            It's not just about embracing technology, but about adopting a proactive and growth mindset that propels me forward every single day."
          </motion.p>
        </div>
        <div className="subrow2 xl:w-3/12 lg:w-3/12 md:w-4/12 sm:w-10/12">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText2}>My Mission.</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='w-full mt-4 text-secondary font-semibold text-[17px] leading-[30px]'>
            "I aspire to take the lead and actively participate in a significant endeavor, 
            making a valuable contribution to the technology ecosystem 
            and creating a profound positive influence in the lives of others."
          </motion.p>
        </div>
      </div>
      <div className="flex flex row gap-x-10 mt-10">
        <Modalit />
        <button className="inline-flex gap-1 items-center px-4 py-2 bg-sky-700 hover:bg-sky-500 text-white text-sm font-medium rounded-md">  
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
          <Link to="/elevator-pitch">Elevator Pitch</Link>
        </button>
      </div>

      <div className='mt-20 flex flex-wrap gap-y-5 justify-between'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
