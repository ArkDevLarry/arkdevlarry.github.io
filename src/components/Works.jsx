import { React } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { WorksModal} from "./../components";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="group [perspective:1000px] w-full rounded-xl cursor-pointer" onClick={() => window.open(source_code_link, "_blank")}>
    <div options={{max: 30, scale: 1, speed: 450,}} className="flip w-full h-full rounded-xl">
      <div className="flip-content rounded-xl">
         <div className='flip-front bg-tertiary relative p-5 rounded-xl w-full transition-all duration-500'>
            <div className='relative w-full h-auto b4img'>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h4 className='text-white font-bold text-[18px]'>{name}</h4>
              <p className='mt-2 text-secondary text-[14px] text-justify'>{description.length > 150 ? description.substring(0,150) : description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2 flip-btn'>
            <button className="trustbtn inline-flex items-center m-auto px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
              Project Details <span className="letspace">>>></span>
            </button>
            </div>
        </div>
        <div className="flip-back bg-tertiary p-5 rounded-xl w-full transition-all duration-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className='mt-5'>
            <h4 className='text-white font-bold text-[24px]'>{name}</h4>
            <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
          </div>
          <div className='fixed inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
          <div className="foot h-auto">
          <div className='mt-4 flex flex-wrap gap-2 bottom-5'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-y-3 allowance justify-between'>
        {projects.slice(0,3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <WorksModal />
    </>
  );
};

export default SectionWrapper(Works, "");
