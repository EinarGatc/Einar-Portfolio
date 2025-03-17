import React, { useState } from 'react'
import { NavbarComponent } from './components/navbar'
import { HeroProfile } from './components/Hero'
import { TechnologicalSkill } from './components/Skills'
import { WorkExperience } from './components/Experience'
import { Projects } from './components/Projects'
import ContactSection from './components/Contact'
import { motion, AnimatePresence } from "framer-motion";
import AZ from "/images/Anteater.png";
import UCI from "/images/UCI.svg";
function App() {
  return (
    <div className="flex flex-col font-secondary items-center">
        <NavbarComponent />
        
        {/* Hero Section */}
        <section id="hero" className="sticky top-0 z-0 flex w-full justify-center md:px-21 min-h-screen">
            <HeroProfile />
        </section>
      
        <div className="flex z-1 flex-col w-full h-full justify-center md:px-21">
            <section id="about" className="bg-white rounded-t-4xl py-20 md:px-21">
                <div className='flex flex-col space-y-4'>
                    <div className='text-xl text-[#F6BD60]'>A BIT</div>
                    <div className='text-4xl'>About Me</div>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl"
                    >
                    I am a fourth-year at the University of California, 
                    Irvine, currently pursuing a bacheolors of science in 
                    computer science. I am interested in AI 
                    and software development.
                    With a desire for knowledge, I have learned that I 
                    grow through rapid research, implementation, and 
                    teaching. Teaching is essential to my learning 
                    methodology as it tests my understanding and 
                    communication capabilities.
                    I am Filipino and grew up in California. I love to
                    travel and have been fortunate enough to travel to
                    multiple countries in Europe, Asia, and North America.
                    </motion.div>
                </div>
            </section>
            
            <section id="education" className="bg-white min-h-[50vh] pb-20 md:px-21">
                <div className='flex flex-col h-full lg:flex-row mb-20 w-full lg:justify-between'>
                    <div className='flex w-full lg:w-1/2 flex-col space-y-4 justify-center'>
                    <div className='text-xl text-[#F6BD60]'>ZOT ZOT ZOT!</div>
                    <div className='text-4xl'>Education</div>
                    <div className='flex w-full h-full flex-col space-y-2'>
                        <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: .5 }}
                        transition={{ duration: .8 }}
                        className="text-2xl"
                        >
                        <div className='flex items-baseline justify-between'>
                            <div className='text-3xl'>B.S. in Computer Science</div>
                            <div className='text-gray-500 text-2xl'>2021-2025</div>
                        </div>
                        <div className='text-2xl text-[#F6BD60]'>University of California, Irvine</div>
                        Regents Scholar. Specialized in Intelligent Systems.
                        Participated in the capstone program, developing AI
                        to detect deepfake music for the company, Sound Ethics.
                        </motion.div>
                    </div>
                    </div>
                    <div className='relative flex w-full pt-10 lg:pt-0 min-h-[30vh] lg:justify-center lg:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className='absolute z-20 transform -rotate-10 w-1/2 h-3/4 lg:left-1/4 lg:w-1/2 lg:h-1/2 rounded-lg overflow-hidden hover:z-50 transition-all duration-300 hover:rotate-0 hover:scale-105'
                    >
                        <img 
                        src={AZ} 
                        alt="" 
                        className="w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className='absolute lg:top-1/2 lg:left-1/2 left-5/8 z-10 transform rotate-6 h-full lg:w-1/2 lg:h-1/2 rounded-lg overflow-hidden hover:z-50 transition-all duration-300 hover:rotate-0 hover:scale-105'
                    >
                        <img 
                        src={UCI} 
                        alt="" 
                        className="w-full h-full"
                        />
                    </motion.div>
                    </div>
                </div>
            </section>
            
            <section id="skills" className="bg-white pb-20 md:px-21">
            <div className='flex flex-col mb-20 items-center space-y-10'>
                <span className='text-4xl'>Technical Skills</span>
                <TechnologicalSkill />
            </div>
            </section>
            
            <section id="portfolio" className="bg-[#0F0F0F] text-white">
                <div className='flex w-full pt-20 text-2xl flex-col items-center'>
                    <span className='text-4xl pb-5'>Work Experience</span>
                    <WorkExperience /> 
                </div>

                <div className='flex w-full pb-20 text-2xl flex-col items-center space-y-10'>
                    <span className='text-4xl pb-5'>Recent Projects</span>
                    <Projects />
                </div>
            </section>
            
            <section id="contact" className="z-1">
            <div className='flex bg-white w-full h-full text-2xl flex-col text-black items-center space-y-10'>
                <ContactSection />
            </div>
            </section>
        </div>
    </div>
  )
}

export default App