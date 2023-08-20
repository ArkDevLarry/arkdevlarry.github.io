import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { HomePage, ElevatorPitch, About } from "./components";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-akerele" element={<About />} />
        <Route path="/elevator-pitch" element={<ElevatorPitch />} />
      </Routes>
      <ScrollToTopOnRouteChange />
    </BrowserRouter>
  );
}

export default App;
