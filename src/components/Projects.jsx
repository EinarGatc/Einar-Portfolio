import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import MA1 from "/images/MA1.gif"
import MA2 from "/images/MA2.gif"
import MA3 from "/images/MA3.gif"

import MSE1 from "/images/MSE1.png"
import MSE2 from "/images/MSE2.png"
import MSE3 from "/images/MSE3.png"
import MSE4 from "/images/MSE4.png"

import BO1 from "/images/BO1.png"
import BO2 from "/images/BO2.png"
import BO3 from "/images/BO3.png"
import BO4 from "/images/BO4.png"
import BO5 from "/images/BO5.png"

import { FaGithub } from "react-icons/fa";

const ImageSlider = ({ images = [] }) => {
    const [positionIndexes, setPositionIndexes] = useState([0,1,2])
    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 3)
            return updatedIndexes
        })
    }

    const handlePrev = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex - 1 + 3) % 3)
            return updatedIndexes
        })
    }

    const positions = [
        'center',
        'left',
        'right'
    ]

    const imageVariants = {
        center: {x:'0%', scale: 1, zIndex:5},
        left: {x:'-75%', scale: .7, zIndex:1},
        right: {x:'75%', scale: .7, zIndex:1}
        
    }
    return (
        <motion.div 
            className='relative w-full md:w-1/3 aspect-square flex items-center flex-col justify-center bg-black overflow-hidden'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .8 }}
        >
            {images.map((image, index) =>
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className=""
                    initial="leftr"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{duration: 0.5}}
                    style={{width: '75%', height: '75%', position:'absolute'}}
                />
            )}
            <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 w-12 h-12 bg-black/50 rounded-full hover:bg-gray-300/50 hover:text-black text-white z-10" 
                onClick={handlePrev}
            >
                ←
            </button>
            <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 w-12 h-12 bg-black/50 rounded-full hover:bg-gray-300/50 hover:text-black text-white z-10" 
                onClick={handleNext}
            >
                →
            </button>
        </motion.div>
    )
}
const projects = [
    {
        title: "Branch Out",
        content: {
            github: "https://github.com/heartybp/Adobytes",
            description: "Social networking platform that matches students with industry mentors through personalized profiles and messaging. Built with a scalable database architecture to support social networking and career development features.",
            technologies: [
                "React",
                "Node.js",
                "PostgreSQL", 
                "Express.js",
                "JavaScript",
                "SQL",
                "HTML",
                "CSS"
            ],
            images: [
                BO1,
                BO2,
                BO5
            ]
        }
    },
    {
        title: "Medical Search Engine",
        content: {
            github: "https://github.com/EinarGatc/Medical-Search-Engine",
            description: "Search system that efficiently processes thousands of medical documents using advanced algorithms and smart caching. Delivers sub-300ms query response times for accurate medical information retrieval.",
            technologies: [
                "Python",
                "React", 
                "JavaScript",
                "Flask",
                "HTML",
                "CSS",
                "Git",
                "Beautiful Soup"
            ],
            images: [
                MSE1,
                MSE2,
                MSE3
            ]
        }
    },
    {
        title: "Multi-Agent AI",
        content: {
            github: "https://github.com/eddie100971/soccer-twos-working",
            description: "AI project exploring collaborative and competitive behaviors between multiple intelligent agents. Implements advanced algorithms to study decision-making patterns in dynamic multi-agent scenarios.",
            technologies: [
                "PyTorch",
                "Python",
                "Git"
            ],
            images: [
                MA1,
                MA2,
                MA3
            ]
        }
    }
]

export const Projects = () => {
    return (
        <div className='flex flex-col w-full space-y-20'>
            {projects.map((project, index) => 
                <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'> 
                <ImageSlider images={project.content.images}></ImageSlider>
                <motion.div 
                    className='w-full md:w-2/3 flex flex-col space-y-4'
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .2 }}
                    transition={{ duration: .8 }}
                >
                    <div className='text-4xl text-white font-geist-mono'>{project.title}</div>
                    <div>{project.content.description}</div>
                    <div className='text-white'>Technologies Used:</div>
                    <div className='flex flex-wrap gap-1 mb-4'>
                        {project.content.technologies.map((technology, index2) => 
                            <div key={index2} className='text-sm px-2 rounded-2xl bg-white text-black '>
                            {technology}
                            </div>
                        )}    
                    </div>
                    <a href={project.content.github} className='flex text-sm bg-white text-black items-center space-x-2 font-bold rounded-sm px-2 py-1 mt-5 self-start hover:bg-gray-300'> 
                        <FaGithub className='w-8 h-8'/> 
                        <div>View on GitHub</div>
                    </a>
                </motion.div>
            </div>
                

            )}
             
        </div>
        
    );
};