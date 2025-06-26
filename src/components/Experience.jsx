import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
export const WorkExperience = () => {
    const [sectionHeights, setSectionHeights] = useState([]);
    const [currentHeight, setCurrentHeight] = useState(0);
    const sectionRefs = useRef([]);
    
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.1"]
    })

    const experiences = [
        { 
            job_title: "AI/ML Student Researcher",
            company: "Sharad Research Lab",
            date: "Mar. 2025 - Present",
            sections: [
                {
                    description: "Developed the Tippers platform by building a RESTful API with Flask to pull and store access point data in a SQL database, enabling real-time data collection and ML predictions for smart building monitoring systems"
                },
                {
                    description: "Achieved 0.63 RMSE future space occupancy forecasting by training and optimizing LSTM and transformer models in Python using PyTorch with 3.2M+ historical sensor data points"
                }
            ]
        },
        { 
            job_title: "Software Engineer Intern",
            company: "IMD Solutions",
            date: "Jan. 2025 - June 2025",
            demo: "https://drive.google.com/file/d/1RWGWr5hJLS3_JumBDh2zPThJ1a7U-M0u/view?usp=drive_link", 
            sections: [
                {
                    description: "Directed mobile app development using Flask, React Native, TypeScript, Firebase, Git, and Agile methodologies, building glucose tracking, hypoglycemia alerts, and data visualization features for patients with Type 1 diabetes"
                },
                {
                    description: "Architected secure OAuth flow and persistent token management system for Dexcom API integration using Firebase Authentication, implementing automated reauthorization for uninterrupted CGM data access"
                },
                {
                    description: "Improved API response times with multi-threading, cutting critical glucose alert response times by 89%"
                }
            ]
        },
        { 
            job_title: "Student Software Developer",
            company: "Sound Ethics - Capstone Project",
            date: "Jan. 2025 - June 2025",
            demo: "https://drive.google.com/file/d/1XbeRh8Du3j_NwfbaX7AXsiH-3Tdk677I/view?usp=drive_link",
            sections: [
                {
                    description: "Built a web application using React, Flask, Docker, and Google Cloud Platform that integrates AI models for music detection and generation, providing a platform for users to interact with and create AI-generated music"
                },
                {
                    description: "Optimized and developed SONICS and RawNet+CCM AI models using a mixed dataset of real and AI-generated songs, achieving 88% accuracy on real songs and 92% on fake tracks"
                },
                {
                    description: "Created a generative music system with custom APIs implementing LLM prompt refinement and AI model backend integration for real-time music generation"
                }
            ]
        }
    ]

    const measureHeights = () => {
        const heights = sectionRefs.current.map(ref => ref?.offsetHeight || 0);
        setSectionHeights(heights);
        console.log('Section heights updated:', heights);
    };
    
    const totalHeightExceptLast = sectionHeights.slice(0, -1).reduce((sum, height) => sum + height, 0);
    const circlePositions = sectionHeights.reduce((positions, height, index) => {
        if (index === 0) {
            positions.push(0); // First circle at top
        } else {
            positions.push(positions[index - 1] + sectionHeights[index - 1]);
        }
        return positions;
    }, []);

    const animatedHeight = useTransform(
        scrollYProgress, 
        [0, 1], 
        [0, totalHeightExceptLast]
    );

    // Track the animated height changes
    useEffect(() => {
        const unsubscribe = animatedHeight.onChange((latest) => {
            setCurrentHeight(latest);
        });
    
        return unsubscribe;
    }, [animatedHeight]);

    
    // Measure section heights on mount and window resize
    useEffect(() => {
        measureHeights();

        const handleResize = () => {
            // Add a small delay to let the DOM finish re-rendering
            setTimeout(() => {
                measureHeights();
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='relative flex w-full relative'>
            <div ref={ref} className="absolute ml-[-30px] flex flex-col items-center">
                <motion.div 
                    className="absolute flex justify-center left-0 top-0 w-1 bg-white"
                    style={{ height: animatedHeight }} // Use animatedHeight directly
                >
                    {circlePositions.map((position, index) => 
                        currentHeight >= position && (
                            <motion.div 
                                key={index}
                                className="absolute flex w-8 h-8 rounded-full border-4 border-white bg-white shadow-lg z-10 items-center justify-center"
                                style={{ top: `${position}px` }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <FaCheckCircle className='text-black'/>
                                </motion.div>   
                                
                            </motion.div>
                        )
                    )}
                </motion.div>
                
            </div>
            <div className="w-full relative">
                {experiences.map((exp, expIndex) => (
                    <motion.div
                        key={expIndex} 
                        ref={el => sectionRefs.current[expIndex] = el}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: .5 }}
                        transition={{ duration: .8 }}
                        className="relative flex"
                    >
                        {/* Your content */}
                        <div className="flex flex-col pb-8 space-y-4 text-xl">
                            <div className="text-white text-3xl font-geist-mono">{exp.company}</div>
                            
                            <div className='flex font-geist-mono'>
                                <div className="text-white">{exp.job_title}</div>
                                <span className='bg-white w-0.5 self-stretch mx-2 my-1'></span>
                                <div className="">{exp.date}</div>   
                            </div>
                            
                            <ul className='list-disc list-inside'>
                                {exp.sections.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item.description}</li>
                                ))}
                            </ul>
                            {exp.demo && (
                                    <a href={exp.demo} className='flex text-sm bg-white text-black items-center space-x-2 font-bold rounded-sm px-2 py-1 mt-5 self-start hover:bg-gray-300'> 
                                        <MdMovie className='w-8 h-8'/> 
                                        <div>View Demo</div>
                                    </a>        
                                )}
                        </div>
                    </motion.div>
                ))}

                {/* Display heights
                <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
                    <div>Current Height: {Math.round(currentHeight)}px</div>
                    {sectionHeights.map((height, index) => (
                        <div key={index}>Section {index}: {height}px</div>
                    ))}
                </div> */}
            </div>        
        </div>
        
    );
};