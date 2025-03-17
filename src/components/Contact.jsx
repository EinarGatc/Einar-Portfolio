import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="w-full px-21 py-20">
        <div className="p-12 flex flex-col md:flex-row w-full space-y-4">
            <form 
                className="flex flex-col justify-center md:justify-start w-full md:w-1/2 text-[34px] space-y-3" 
                action="https://api.web3forms.com/submit" 
                method="POST"
            >
                <header className="text-[#F6BD60] text-4xl">Send me a message!</header>
                <span className="text-black text-2xl mb-2.5">
                    Want to ask a question or work together?
                    <br/>
                    Lets start a conversation.
                </span>
                <input type="hidden" name="access_key" value="0d12f5a6-8b60-45e0-be9a-50cec1073e1d" />
                <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                className="text-black w-3/4 rounded-lg shadow-lg px-1 py-2 outline-none border-none text-xl" 
                required 
                /> 
                <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                className="text-black w-3/4 rounded-lg shadow-lg px-1 py-2 outline-none border-none text-xl" 
                required 
                />    
                <textarea 
                name="message" 
                placeholder="Enter your message" 
                className="text-black w-3/4 rounded-lg shadow-lg px-1 py-2 outline-none border-none text-xl" 
                required
                ></textarea>
                <button className="h-[5vh] w-1/3 border-none text-black bg-[#F6BD60] rounded-[50px] cursor-pointer transition-all duration-300 ease-in-out text-lg hover:text-[#535353]">
                    Submit
                </button>
            </form>
            <div className="flex flex-col w-full md:w-1/2 space-y-4">
                <div className="flex flex-col text-black border-none rounded-[18px] outline-none space-y-3">
                    <header className="text-[#F6BD60] text-4xl">Info</header>
                    <a href="mailto:einar.gatchalian@gmail.com" className="flex items-center">
                        <FaEnvelope className='w-1/20'/>
                        <div className='pl-2 text-xl'>einar.gatchalian@gmail.com</div>
                    </a>
                    <a href="" className="flex items-center">
                        <FaLocationDot className='w-1/20'/>
                        <div className='pl-2 text-xl'> Riverside, CA</div>
                    </a>
                </div>
                <div className="flex flex-col text-black border-none rounded-[18px] space-y-3 outline-none">
                    <header className="text-[#F6BD60] text-4xl">Socials</header>
                    <a href="https://www.linkedin.com/in/egatchal/" className="flex items-center text-3xl">
                        <FaLinkedin className='w-1/20'/>
                        <div className='pl-2 text-xl'>Einar Gatchalian</div>
                    </a>
                    <a href="https://github.com/egatchal" className="flex items-center">
                        <FaGithub className='w-1/20'/>
                        <div className='pl-2 text-xl'>EinarGatc</div>
                    </a> 
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactSection;