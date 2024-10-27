import React, { useState,useRef, useEffect,Suspense } from 'react';
import { Environment, ScrollControls, Scroll } from '@react-three/drei';
import { Avatar } from '../components';
import { Office } from '../components/Office';
import { Bio } from '../constants';
import { motion } from 'framer-motion-3d';
import { Canvas } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import Button from '../components/Button';
import { FaDownload } from 'react-icons/fa';
import { CanvasLoader } from '../components/index.js';


const Info = () =>{
  return(
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='p-8 mx-auto flex flex-col -ml-4 md:mt-36 items-start justify-center '>
          <h1 className='text-3xl xl:text-5xl mt-1 text-white-700'>
            Hey <span className='waving-hand'>👋</span>
            <p>It's Me</p>
            <span>Aryan Gupta</span>
          </h1>

          <motion.p className='text-lg text-white-600 mt-4' initial = {{opacity:0, y:25}} whileInView = {{ opacity:1, y:0 }}>
             <span className='flex whitespace-nowrap'>
              <p>And I'm&nbsp;</p>
              <span className='text-white-800'>
                <Typewriter options={{strings:Bio.roles, autoStart:true, loop:true }} />
              </span>
            </span>
          </motion.p>

          <motion.div>
            <div className='text-white-800 mt-2 md:mt-4 text-base h-max w-96 text-balance'>
              {Bio.description}
            </div>
          </motion.div>
          <a href={Bio.resume} download="Aryan_Resume" className='mt-7'>
            <Button name ="Download CV"  isBeam icon={<FaDownload className='text-xl' title='Download Now' />}/>
          </a>
        </div>
      </div>
    </section>
  );
};

const Hero = (props) =>{
  
  const { section } = props;
  const groupRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      
      const width = window.innerWidth;

      if (width < 768) {
        groupRef.current.position.set(0.3,-0.8,2.8);
        groupRef.current.scale.set(0.5, 0.5, 0.5); 
        avatarRef.current.position.set(0, 0.1, -0.7); 
      } else if (width < 1024) {  
        groupRef.current.position.set(2,-0.8,1.1);
        groupRef.current.scale.set(0.7, 0.7, 0.7);
        avatarRef.current.position.set(0.05, 0.2, -0.5); 
      } else {
        groupRef.current.position.set(2,-0.8,2);
        groupRef.current.scale.set(1, 1, 1); 
        avatarRef.current.position.set(0.07, 0.24, -0.57);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <>
      <Environment preset='night' />
      <ambientLight intensity={1} />
      <motion.group ref={groupRef} position={[2,-0.8,1.1]} scale={[1,1,1]} rotation-y={-Math.PI/6} animate={{
          y: section === 0 ? 0 : -1,
        }}> 
        <Office section = {section} />
        <group ref={avatarRef} name='CharacterSpot' position={[0.07, 0.24, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]} >
          <Avatar />
        </group>
      </motion.group> 
    </>
  );
};


const About = () => {
  const [section,setSection] = useState(0);
  return (
    <div className="min-h-screen w-full flex " id="/about">        
        {/* <Canvas shadows camera={{position:[0,3,8], fov:42}} style={{height:"100vh"}} >
          <Suspense fallback={<CanvasLoader />}>
            <color attach="background" args={["#010103"]} />
            <ScrollControls pages={0} damping={0.1}>
              <Hero section={section}/>
              <Scroll html>
                <Info />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas> */}
    </div>
  );
};

export default About;