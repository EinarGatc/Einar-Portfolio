import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoDocuments, IoStopwatch, IoPerson } from "react-icons/io5";
import { FaMagnifyingGlass, FaMessage, FaGamepad, FaGear } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { RiStackFill } from "react-icons/ri";
import MSE from "/images/MedicalSearchEngine.png"
import BO from "/images/Adobytes.png"
import MPE from "/images/MPE.gif"

const projects = [
    {
        title: "Medical Search Engine",
        content: {
            github: "https://github.com/EinarGatc/Medical-Search-Engine",
            description: "Specialized medical information retrieval engine.",
            project_image: MSE,
            content_text_color: "text-white",
            content_bg_color: "bg-sky-600",
            
            features: [
                {
                    description: "9000+ medical documents indexed",
                },
                {
                    description: "Sub-300ms query response time",
                },
                {
                    description: "Full-stack implementation",
                }
            ]
        }
    },
    {
        title: "Branch Out",
        content: {
            github: "https://github.com/heartybp/Adobytes",
            description: "Networking platform connecting students with mentors.",
            project_image: BO,
            content_text_color: "text-white",
            content_bg_color: "bg-emerald-900",
            features: [
                {
                description: "Personalized user profile onboarding",
                },
                {
                description: "Mentorship matching system",
                },
                {
                description: "Interactive message board",
                }
            ]
        }
    },
    {
        title: "Multi-Agent AI",
        content: {
            github: "https://github.com/eddie100971/soccer-twos-working",
            description: "Reinforcement learning for multi-agent environments.",
            project_image: MPE,
            content_text_color: "text-white",
            content_bg_color: "bg-blue-950",
            features: [
                {
                    description: "Soccer-Twos environment modeling",
                },
                {
                    description: "Sample Dropout Variance Reduction",
                },
                {
                    description: "MAPPO, RMAPPO, IPPO algorithm",
                }
            ]
        }
    }
]

export const Projects = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [direction, setDirection] = useState(0);
    
    const handleTabChange = (index) => {
        setDirection(index > activeTab ? 1 : -1);
        setActiveTab(index);
    };

    return (
    <div className="w-full md:px-21">
        <div className="flex w-full gap-8 mb-8">
            {projects.map((project, index) => (
            <button
                key={index}
                className={`flex-1 py-2 text-center font-medium rounded-md text-sm uppercase tracking-wide transition-colors duration-200 ${
                activeTab === index
                    ? `${projects[activeTab].content.content_bg_color} text-white`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange(index)}
            >
                {project.title}
            </button>
            ))}
        </div>

        <div className={`${projects[activeTab].content.content_bg_color} ${projects[activeTab].content.content_text_color} p-12 rounded-lg min-h-[500px] overflow-hidden relative`}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <motion.h1 
                    className="text-5xl font-bold mb-8 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    >
                    {projects[activeTab].content.description}
                    </motion.h1>
                    <motion.div 
                    className="flex flex-col gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    >
                        <a href={projects[activeTab].content.github}>
                            <button className="bg-black text-xl text-white py-2 px-6 rounded-md font-medium w-fit hover:bg-gray-800 transition-colors">
                                View More
                            </button>
                        </a> 
                    </motion.div>
                    {projects[activeTab].content.features.map((feature, index) => (
                        <motion.li 
                        key={index} 
                        className="flex items-center mb-1 gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className="p-2 z-0 bg-white rounded-md mt-1">
                                <svg 
                                className="w-6 h-6 text-black" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    {activeTab === 0 && index === 0 && (
                                        <IoDocuments />
                                    )}
                                    {activeTab === 0 && index === 1 && (
                                        <IoStopwatch />
                                    )}
                                    {activeTab === 0 && index === 2 && (
                                        <RiStackFill />
                                    )}

                                    {activeTab === 1 && index === 0 && (
                                        <IoPerson />
                                    )}
                                    {activeTab === 1 && index === 1 && (
                                        <FaMagnifyingGlass />
                                    )}
                                    {activeTab === 1 && index === 2 && (
                                        <FaMessage />
                                    )}

                                    {activeTab === 2 && index === 0 && (
                                        <FaGamepad />
                                    )}
                                    {activeTab === 2 && index === 1 && (
                                        <GoGraph />
                                    )}
                                    {activeTab === 2 && index === 2 && (
                                        <FaGear />
                                    )}
                                
                                </svg>
                            </div>
                            <div className='z-1'>{feature.description}</div>
                        </motion.li>
                    ))}
                </div>

                <div className="lg:w-1/2">
                    <motion.div 
                    className="flex flex-col h-full justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    >
                        <div className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
                            {activeTab == 0 && (
                                <div className="relative">
                                    <div className="absolute -top-40 right-0 w-120 h-120 bg-cyan-300 rounded-full opacity-40"></div>
                                    <div className="absolute -bottom-60 left-1/4 w-140 h-140 bg-cyan-400 rounded-full opacity-30"></div>
                                    
                                    {/* Medium circles - positioned around content */}
                                    <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-400 rounded-full opacity-25"></div>
                                    <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500 rounded-full opacity-20"></div>
                                    
                                    {/* Additional medium circles */}
                                    <div className="absolute -top-20 left-1/3 w-50 h-50 bg-blue-300 rounded-full opacity-30"></div>
                                    <div className="absolute -bottom-10 -right-20 w-70 h-70 bg-blue-400 rounded-full opacity-20"></div>
                                    
                                    {/* Closer small circles */}
                                    <div className="absolute top-3/4 left-10 w-30 h-30 bg-blue-200 rounded-full opacity-25"></div>
                                    <div className="absolute bottom-1/4 right-10 w-26 h-26 bg-cyan-200 rounded-full opacity-30"></div>
                                    
                                    {/* Main image container */}
                                    <div className="bg-white p-6 rounded-lg shadow-xl w-80 h-80 z-10 relative">
                                        <img src={projects[activeTab].content.project_image} alt="" />
                                    </div>
            
                                </div>
                            )}
                            {activeTab == 1 && (
                                <div className="relative">
                                    {/* Primary large background circles - jungle/forest theme */}
                                    <div className="absolute -top-80 -right-40 w-180 h-180 bg-emerald-800 rounded-full opacity-25"></div>
                                    <div className="absolute -bottom-60 left-40 w-160 h-160 bg-green-900 rounded-full opacity-20"></div>

                                    {/* Medium accent circles */}
                                    <div className="absolute top-1/3 -right-60 w-120 h-120 bg-lime-700 rounded-full opacity-15"></div>
                                    <div className="absolute bottom-1/4 -left-30 w-100 h-100 bg-amber-700 rounded-full opacity-10"></div>

                                    {/* Single gradient circle */}
                                    <div className="absolute top-2/3 right-1/4 w-60 h-60 bg-gradient-to-br from-emerald-700 to-green-900 rounded-full opacity-15"></div>
                                    <div className="bg-white p-6 rounded-lg shadow-xl w-80 h-80 z-10 relative">
                                        <img src={projects[activeTab].content.project_image} alt="" />
                                    </div>
            
                                </div>
                            )}
                            {activeTab == 2 && (
                                <div className="relative">
                                    <div className="absolute -top-60 -left-60 w-120 h-120 bg-blue-800 rounded-full opacity-20"></div>
                                    <div className="absolute top-20 right-20 w-48 h-48 bg-teal-600 rounded-full opacity-25"></div>
                                    
                                    {/* Lower area circles */}
                                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-900 rounded-full opacity-15"></div>
                                    <div className="absolute bottom-40 left-40 w-64 h-64 bg-indigo-700 rounded-full opacity-20"></div>
                                    
                                    {/* Side circles */}
                                    <div className="absolute top-1/3 -left-30 w-60 h-60 bg-blue-600 rounded-full opacity-20"></div>
                                    <div className="absolute bottom-1/3 -right-30 w-60 h-60 bg-teal-700 rounded-full opacity-20"></div>
                                    
                                    {/* Scattered small circles */}
                                    <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-sky-500 rounded-full opacity-30"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-indigo-500 rounded-full opacity-25"></div>
                                    <div className="absolute top-3/4 left-2/3 w-24 h-24 bg-cyan-600 rounded-full opacity-20"></div>
                                    <div className="absolute bottom-2/3 right-1/3 w-14 h-14 bg-blue-500 rounded-full opacity-30"></div>
                                    
                                    {/* Main image container */}
                                    <div className="bg-white p-6 rounded-lg shadow-xl w-80 h-80 z-10 relative">
                                        <img src={projects[activeTab].content.project_image} alt="" />
                                    </div>
            
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};