import { navLinks } from "../constants";
import { parse } from "svg-vdom";
import Carousel from "./Carousel";
import { media } from "../constants";

const Foot = () => {

    return (
      <div className="relative mt-16 bg-deep-purple-accent-400">
        <svg className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
        </svg>

        
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
                <div className="group">
                    <Carousel/>
                </div>

                <ul className="mt-7 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">    
                    {navLinks.map((nav) => (
                        <li key={nav.id} className="text-gray-700 transition hover:text-gray-700/75" onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    {media.map((m, index) => (
                    <li key={index}>
                        <div onClick={() => window.open(m.link, "_blank")} className="text-gray-700 transition hover:text-gray-700/75">
                            <span className="sr-only">{m.name}</span>
                            <span dangerouslySetInnerHTML={{ __html: m.svg }}></span>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col w-full justify-between text-center pt-5 pb-10 border-t border-deep-purple-accent-200">
                <p className="text-center text-sm text-gray-100">© Copyright 2023 InfraSurge.net. All rights reserved.</p>
            </div>
        </div>
      </div>
    );
};

export default Foot