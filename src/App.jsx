import React, { useState } from 'react'
import { NavbarComponent } from './components/navbar'
import { HeroProfile } from './components/Hero'
import { TechnologicalSkill } from './components/Skills'
import { WorkExperience} from './components/Experience'
import { Projects } from './components/Projects'
import ContactSection from './components/Contact'
import { motion, AnimatePresence } from "framer-motion";
import AZ from "/images/Anteater.png";
import UCI from "/images/UCI.svg";
function App() {
  return (
    <div className="flex w-full bg-black flex-col font-geist items-center px-21">
        <nav id="navbar" className="fixed top-0 w-full px-4 z-50 bg-white shadow-md font-geist-mono text-xl">
            <NavbarComponent /> 
        </nav>

        
        {/* Hero Section */}
        <section id="hero" className="top-0 pt-10 z-0 flex h-[100vh] w-full justify-center text-4xl md:text-6xl">
            <HeroProfile />
        </section>
      
        <div className="flex z-1 flex-col max-w-4xl bg-black h-full text-xl text-[#999999] justify-center space-y-20 py-20">
            <section id="about" className="w-full">
                <div className='flex flex-col space-y-4'>
                    <div className='text-4xl text-white font-geist-mono'>About Me</div>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: 0.8 }}
                    >
                    I'm a recent Computer Science graduate from UC Irvine with a deep passion for AI and software development. My learning philosophy centers on a continuous cycle of research, implementation, and teaching. I believe you truly master something when you can share that knowledge with others. This approach has shaped how I tackle complex problems and build meaningful solutions.
                    </motion.div>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: 0.8 }}
                    >
                    
                    I thrive on the full spectrum of development, from diving deep into machine learning algorithms to architecting scalable web applications. Whether I'm working with neural networks, building mobile apps, or creating APIs, I'm driven by the challenge of transforming innovative ideas into real-world impact. My experience spans research labs to startup environments, always pushing to learn new technologies and methodologies.
                    
                    </motion.div>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: 0.8 }}
                    >
                    As a Filipino-American from California, I bring diverse perspectives to everything I create. Outside of coding and research, I'm passionate about gaming, appreciating both the technical craftsmanship and strategic depth of well-designed systems, and traveling the world. I've explored countries across Europe, Asia, and North America, experiences that constantly inspire fresh approaches to problem-solving and innovation.
                    </motion.div>
                </div>
            </section>
            
            <section id="education" className="relative w-full h-full">
                <div className='flex flex-col h-full lg:flex-row w-full lg:justify-between items-center'>
                    <div className='relative flex w-full flex-col space-y-4 justify-center'>
                        <div className='text-4xl text-white font-geist-mono'>Education</div>
                        <div className='flex w-full h-full flex-col'>
                            <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: .5 }}
                            transition={{ duration: .8 }}
                            className='space-y-3'
                            >
                            <div className='text-white font-geist-mono text-3xl'>University of California, Irvine</div>
                            <div className='space-y-1'>
                                <div className='flex items-baseline'>
                                    <span className='text-white'>Bachelor of Science in Computer Science</span>
                                    <span className='bg-white w-0.5 self-stretch mx-2 my-1'></span>
                                    <span className=''> Sep. 2021 - June 2025</span>
                                </div>
                                <div className='flex items-baseline'>
                                    <span className='pr-2'>Specialization:</span>
                                    <span className=''>Intellgent Systems</span>
                                </div>
                                <div className='flex items-baseline'>
                                    <span className='text-white pr-2'>GPA:</span>
                                    <span className=''>3.84</span>
                                </div>    
                            </div>
                            </motion.div>
                        </div>
                    </div> 
                </div>
            </section>
            
            
            
            <section id="portfolio" className="">
                <div className='flex w-full text-xl flex-col items-center space-y-4'>
                    <span className='text-4xl text-white font-geist-mono'>Work Experience</span>
                    <div>
                        <WorkExperience />     
                    </div>
                    
                </div>
            </section>
            
            <div className='z-1 flex max-w-4xl text-xl flex-col items-center space-y-4'>
                <span className='text-white font-geist-mono text-4xl'>Recent Projects</span>
                <Projects />
            </div>
        
            <section id="skills" className="max-w-4xl text-white">
                <div className='flex flex-col items-center space-y-4'>
                    <span className='text-2xl md:text-4xl text-white font-geist-mono'>Technical Skills</span>
                    <TechnologicalSkill />
                </div>
            </section>
            
            <section id="contact" className="z-1 max-w-4xl">
                <div className='flex w-full h-full text-xl flex-col items-center'>
                    <ContactSection />
                </div>
            </section>
        </div>
    </div>
  )
}

export default App