import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div 
        className="w-full py-20 text-xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: .5 }}
        transition={{ duration: 0.8 }}
    >
        <div className="flex flex-col md:flex-row w-full space-y-4">
            <form 
                className="flex flex-col justify-center md:justify-start w-full md:w-1/2 space-y-3 text-white" 
                action="https://api.web3forms.com/submit" 
                method="POST"
            >
                <header className="text-white font-geist-mono text-3xl">Send me a message!</header>
                <span className="mb-2.5">
                    Want to ask a question or work together?
                    <br/>
                    Lets start a conversation.
                </span>
                <input type="hidden" name="access_key" value="0d12f5a6-8b60-45e0-be9a-50cec1073e1d" />
                <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                className=" w-3/4 bg-white shadow-lg px-1 py-1 outline-none border-none text-black" 
                required 
                /> 
                <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                className=" w-3/4 bg-white shadow-lg px-1 py-1 outline-none border-none text-black" 
                required 
                />    
                <textarea 
                name="message" 
                placeholder="Enter your message" 
                className=" w-3/4 bg-white shadow-lg px-1 py-1 outline-none border-none text-black" 
                required
                ></textarea>
                <button className="h-[5vh] w-1/3 border-none text-black bg-white rounded-[50px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#535353]">
                    Submit
                </button>
            </form>
            <div className="flex flex-col w-full md:w-1/2 space-y-4 text-white">
                <div className="flex flex-col border-none rounded-[18px] outline-none space-y-3">
                    <header className="text-white font-geist-mono text-3xl">Info</header>
                    <a href="mailto:einar.gatchalian@gmail.com" className="flex items-center">
                        <FaEnvelope className='text-white w-1/20'/>
                        <div className='pl-2'>einar.gatchalian@gmail.com</div>
                    </a>
                    <a href="" className="flex items-center">
                        <FaLocationDot className='text-white w-1/20'/>
                        <div className='pl-2'> Riverside, CA</div>
                    </a>
                </div>
                <div className="flex flex-col border-none rounded-[18px] space-y-3 outline-none">
                    <header className="text-white font-geist-mono text-3xl">Socials</header>
                    <a href="https://www.linkedin.com/in/egatchal/" className="flex items-center">
                        <FaLinkedin className='text-white w-1/20'/>
                        <div className='pl-2'>Einar Gatchalian</div>
                    </a>
                    <a href="https://github.com/egatchal" className="flex items-center">
                        <FaGithub className='text-white w-1/20'/>
                        <div className='pl-2'>EinarGatc</div>
                    </a> 
                </div>
            </div>
        </div>
    </motion.div>
  );
};

export default ContactSection;