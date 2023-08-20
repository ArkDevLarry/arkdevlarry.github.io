import React from "react";
import { bioimg } from "../assets";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <button onClick={() => setShowModal(true)} className="inline-flex gap-1 items-center px-4 py-2 bg-lime-700 hover:bg-lime-400 text-white text-sm font-medium rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
            </svg> Read Bio
        </button>
      {showModal ? (
        <>
          <div onClick={() => setShowModal(false)} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-full max-w-[45rem] p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-tertiary">
                <div className="text-center p-5 flex-auto justify-center">
                    <img src={bioimg} className="w-[150px] h-auto m-auto" alt="Biography Image" />
                    <h2 className="text-xl font-bold py-4 ">Bio</h2>
                    <p className="text-sm text-gray-200 px-8 text-justify">
                        Hello, I'm Akerele Quadri, a skilled software developer currently working in a startup tech company, my personal brand name is Dynatech. My expertise includes HTML, CSS, jQuery, JavaScript, React, MySQL, PHP, Laravel, and Livewire. With a strong background in critical and human-centered thinking, I'm deeply passionate about technology and its potential to drive innovation.
                        I excel in managing Agile and Scrum projects, prioritizing tasks, and meeting deadlines. My communication skills and ability to work both independently and collaboratively make me a valuable asset to any team.
                    </p>
                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button onClick={() => setShowModal(false)} className="mb-2 md:mb-0 bg-lime-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:opacity-75">
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
