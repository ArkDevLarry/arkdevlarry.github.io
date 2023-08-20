import React from "react";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";


export default function WorksModal() {
  const [showWorksModal, setShowWorksModal] = React.useState(false);
  if (showWorksModal == true) {
   document.body.style.overflow = "hidden";
  }else {
    document.body.style.overflow = "";
  }

  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (

      <div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="group [perspective:1000px] w-full rounded-xl cursor-pointer">
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
      </div>
    );
  };

  return (
    <>
        <div className="w-full">
            <button onClick={() => setShowWorksModal(true)} className="flex mt-10 mx-auto gap-1 items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-400 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                </svg>View Portfolio
            </button>
        </div>
      {showWorksModal ? (
        <>
          <div onClick={() => setShowWorksModal(false)} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-full max max-h-[500px] max-w-[98%] overflow-scroll p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-tertiary-400">
                <div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} `}>My work</p>
                    <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
                    <p className="text-secondary">Completed ({projects.length}) projects</p>
                </div>
                <div className='mt-20 flex flex-wrap gap-y-3 allowance justify-evenly'>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button onClick={() => setShowWorksModal(false)} className="mb-2 md:mb-0 bg-lime-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:opacity-75">
                        Close
                    </button>
                </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
