// import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from 'react';
import { Foot, Navbar } from "./../components";
import { elevatorpitch } from "../assets";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ElevatorPitch = () => {

  return (
    // <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <motion.div variants={fadeIn("left", "spring", 1, 0.75)} className="group [perspective:1000px] pt-40 pb-40 w-full h-full">
                <div className="img">
                    <img src={elevatorpitch} className='m-auto' alt="Elevator Pitch Image" />
                </div>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText2 + " text-center"}`}>Elevator Pitch.</h2>
                </motion.div>
                <div className='m-10 flex justify-center flex-col'>
                    <div className="mb-10 text-center"><b>Watch on Youtube: <a className="text-blue-500 hover:text-blue-700" target='_blank' href="https://www.youtube.com/embed/GMNi9f47Vsw">https://www.youtube.com/embed/GMNi9f47Vsw</a></b></div>
                    <iframe width="853" className='m-auto' height="480" src="https://www.youtube.com/embed/GMNi9f47Vsw" title="Pitch Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* <div className="text-center break-words pt-10 m-auto xl:8/12 lg:w-8/12 md:w-9/12 sm:w-10/12 xs:w-10/12 w-10/12">
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[NAME]</div>
                        <div className="elbody text-center">Akerele Quadri Ayomide.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[BACKGROUND]</div>
                        <div className="elbody text-justify">I currently work in a startup tech company where I learned to code using HTML & CSS, jQuery, JavaScript, React, MySQL, PHP, Laravel and Livewire. My passion for technology as child played a major role in my desire to pursue knowledge about technology further.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[TOP SKILLS]</div>
                        <div className="elbody text-justify">Critical Thinking, Human-centered Thinking, Knowledge of tech track specializations & tech tools.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[CONNECTION]</div>
                        <div className="elbody text-justify">I had a very high level of curiosity about how technology works and operates, this led me to develop high interest in technology.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[VALUE PROPOSITION]</div>
                        <div className="elbody text-justify">I am well versed in the concept of Agile & Scrum method of handling projects, I manage tasks well, I manage priority, time, and deadline well, I have good communication skills, I work well in a team and can also work in isolation, I quickly acclimate to unfamiliar environments and adapt well to new ecosystems.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[MY ASK]</div>
                        <div className="elbody text-justify">If you’re looking for a super-efficient software engineer who can troubleshoot and debug website & web application error(s) within a short period of time, please connect with me on The Room portal.</div>
                        <br />
                    </div>
                    <div className="elpoint">
                        <div className="elhead font-bold text-secondary">[CONCLUSION]</div>
                        <div className="elbody text-justify">As a software engineer, I am confident that my dedication, proficiency, and passion for problem-solving make me the ideal candidate for this position. My track record of successful projects and positive outcomes, combined with my adaptability and strong communication skills, demonstrate that I am ready to take on new challenges and drive technological innovation within your organization. I am excited to contribute my expertise to a team that values innovation and excellence, and I am eager to make a significant impact by pushing the boundaries of software development in this role. You can count on me to bring enthusiasm, commitment, and a growth mindset to every project, ensuring exceptional results for your company.</div>
                        <br />
                    </div>
                </div> */}
            </motion.div>
            <Foot/>
        </div>
      </div>
    // {/* </BrowserRouter> */}
  );
}


export default ElevatorPitch;
