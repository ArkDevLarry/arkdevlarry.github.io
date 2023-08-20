// import { BrowserRouter, Route, Switch } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Foot } from "./../components";

import React, { Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { preloader } from "./../assets"

const WorksComponent = React.lazy(() => import('../components/Works'));
const TechComponent = React.lazy(() => import('../components/Tech'));
const ContactComponent = React.lazy(() => import('../components/Contact'));
const StarsComponent = React.lazy(() => import('../components/canvas/Stars'));

const HomePage = () => {

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
  });

  const { ref: worksRef, inView: worksInView } = useInView({
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  const { ref: starsRef, inView: starsInView } = useInView({
    triggerOnce: true,
  });

  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
      {/* <div ref={techRef}>
        {techInView ? (
          <Suspense fallback={<img src={preloader} alt="preloader" className="m-auto"/>}>
            <TechComponent />
          </Suspense>
        ) : (<img src={preloader} alt="preloader" className="m-auto"/>)}
      </div> */}
        <div ref={worksRef}>
        {worksInView ? (
          <Suspense fallback={<img src={preloader} alt="preloader" className="m-auto"/>}>
           <WorksComponent />
          </Suspense>
        ) : (<img src={preloader} alt="preloader" className="m-auto"/>)}
      </div>
        <Feedbacks />
        <div className='relative z-0' ref={contactRef}>
          {contactInView || starsInView ? (
            <Suspense fallback={<img src={preloader} alt="preloader" className="m-auto"/>}>
              <ContactComponent />
              <StarsComponent />
            </Suspense>
          ) : (<img src={preloader} alt="preloader" className="m-auto"/>)}
        </div>
        <Foot/>
      </div>
  );
}

export default HomePage;
