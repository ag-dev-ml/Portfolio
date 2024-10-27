import React from 'react';
import { skills } from '../constants';
import { Tilt } from 'react-tilt';


const Skills = () => {
  return (
    <div className='flex flex-col justify-center relative z-10 items-center' id='/skills'> 
        <div className='relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px] Skills_media'>
            <div className=' text-5xl text-center font-semibold mt-[20px] text-white-600 title'>
                Skills
            </div>

            <div className='text-[18px] text-center font-semibold text-white-600 desc mt-[40px]'>
                Here are some of my skills on which I have been recently worked on and some are currently in process .. 
            </div>

            <div className='w-full flex flex-wrap mt-5 gap-[50px] justify-center'>
                {skills.map((skill, index)=>(
                    <Tilt key={`tilt-${index}`}>
                        <div className='w-full max-w-[500px] skills'>
                            <div className='text-[28px] font-semibold mt-5 text-center text-white-600'>
                                {skill.title}
                            </div>

                            <div className='flex justify-center flex-wrap gap-3 mt-5'>
                                {skill.skills.map((item, index_x)=>(
                                    <div key={`skill-x-${index_x}`} className='text-[16px] font-normal text-white-600 border-solid border-2 border-white/60 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-white/60 skills_items'>
                                        <img src={item.image} alt="items" loading="lazy" className='w-6 h-6' />
                                        {item.name}   
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Skills;