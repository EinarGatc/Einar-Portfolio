import Typewriter from 'typewriter-effect';
import profile from '/images/Profile.jpg'
import { FaGithub, FaEnvelope, FaLinkedin  } from "react-icons/fa";
import { scrollToSection } from './navbar';
import { motion, AnimatePresence } from "framer-motion";

export const HeroProfile = () => {
    return (
        <div className="w-full bg-black py-10 font-geist-mono" id='#About'>
            <div className="flex flex-col text-white items-center justify-center h-full space-y-10">
                <div className="h-1/3 aspect-square rounded-full bg-white overflow-hidden shadow-lg">
                    <img 
                    src={profile} 
                    alt="" 
                    className="w-full h-full object-cover"
                    />
                </div>

                <motion.div 
                className='text-center'
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                >
                Hi, Im Einar Gatchalian
                </motion.div>

                <div className='w-2/3 flex flex-row justify-center text-black text-xl gap-4 flex-wrap'>
                    <a href='https://www.linkedin.com/in/egatchal/' className='flex items-center justify-center py-1 px-3 bg-white border-black border-1.5 rounded-4xl space-x-2 hover:bg-gray-300'>
                        <FaLinkedin/>
                        <div>LinkedIn</div>
                    </a>
                    <a href='https://github.com/EinarGatc' className='flex items-center justify-center py-1 px-3 bg-white border-black border-1.5 rounded-4xl space-x-2 hover:bg-gray-300'>
                        <FaGithub/>
                        <div>GitHub</div>
                    </a>
                    <a onClick={() => scrollToSection('contact')} className='flex items-center justify-center py-1 px-3 bg-white border-black border-1.5 rounded-4xl space-x-2 hover:bg-gray-300'>
                        <FaEnvelope/>
                        <div>Contact Me</div>
                    </a>
                </div>
            </div>
    
        </div>
    )
}