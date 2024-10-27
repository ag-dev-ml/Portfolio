import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const [ toggle, setToggle ] = useState("all");
  
  const filteredProjects = myProjects.filter(project => 
    toggle === "all" || project.category === toggle
  );

  const projectCount = filteredProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex, toggle]);

  const currentProject = filteredProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id='/projects'>
      <p className="head-text">Projects</p>

      <div className='text-[18px] text-center font-semibold text-white-600 desc mb-[16px]'>
        Here are some projects I have been worked on and some are currently in process .. 
      </div>

      <div className='w-fit flex border-[1.5px] justify-center border-solid border-white-500 text-[16px] rounded-xl font-medium my-5 mx-auto grupss'>
        <div className={`px-5 py-2 rounded-md cursor-pointer hover:bg-white-700 hover:text-black-100 ${toggle === "all" ? "bg-white-700 text-black-100" : "text-white-700"}`} onClick={() => setToggle("all")}>
          All
        </div>
        
        <div className='w-[1.5px] bg-white'></div>
        
        <div className={`px-5 py-2 rounded-md cursor-pointer hover:bg-white-700 hover:text-black-100 ${toggle === "web" ? "bg-white-700 text-black-100" : "text-white-700"}`} onClick={() => setToggle("web")}>
          Web App
        </div>
        
        <div className='w-[1.5px] bg-white'></div>
        
        <div className={`px-5 py-2 rounded-md cursor-pointer hover:bg-white-700 hover:text-black-100 ${toggle === "ml" ? "bg-white-700 text-black-100" : "text-white-700"}`} onClick={() => setToggle("ml")}>
          Machine Learning
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-1 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          
          {currentProject &&(
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} loading="lazy" alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>
          )}

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} loading="lazy" alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}
              <h4 className="text-white-600 text-xs mt-2">{currentProject.date}</h4>
            </p>  

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText"></p>
          </div>


          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} loading="lazy" alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" loading="lazy" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" loading="lazy" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" loading="lazy" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
