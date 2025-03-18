import React, {useState, useRef, useEffect} from 'react';
import GG from "/images/GG.png"
import RA from "/images/MUST.jpeg"

export const WorkExperience = () => {
    const experiences = [
        { 
            job_title: "Software Engineer Intern",
            company: "GlucoGuard",
            date: "Jan 2025 - Present",
            img: GG,
            sections: [
                {
                    title: "Full-Stack Development",
                    description: "Led development of a React Native mobile glucose monitoring application with critical hypoglycemia alerts." 
                },
                {
                    title: "API Integration",
                    description: "Architected secure OAuth flow and persistent token management system for Dexcom API integration using Firebase Authentication."
                },
                {
                    title: "Performance Optimization",
                    description: "Optimized alert data processing pipeline by implementing multi-threading, resulting in 89% reduction in critical glucose alert response times."
                }
            ]
        },
        { 
            job_title: "Research Assistant",
            company: "UCI MUST Project",
            date: "Sept 2024 - Present", 
            img: RA,
            sections: [
                {
                    title: "Data Processing",
                    description: "Developed data processing pipeline analyzing 89,000+ student career outcomes using Jaro-Winkler and Levenshtein distance algorithms."
                },
                {
                    title: "API Development",
                    description: "Implemented software with an API to retrieve standardized job codes and classifications, streamlining the categorization of career data for over 10,000 participants."
                },
                {
                    title: "NLP Techniques",
                    description: "Constructed web scraping workflows, NLP pipelines, and fuzzy matching techniques for analyzing Reddit data and enhancing text processing accuracy."
                }
            ]
        }
    ]

    return (
        <div className="px-5 md:px-21 w-full">
            {experiences.map((exp, expIndex) => (
                <div 
                key={expIndex} 
                className="flex flex-col pb-20 text-white space-y-4"
                >
                    <div className="text-xl md:text-3xl px-10">{exp.job_title}</div>
                    <div className="text-xl md:text-2xl px-10 text-[#F6BD60]">{exp.company}</div>
                    <Experience experience={exp}/>
                </div>
            ))}
        </div>
    );
} 

const Experience = ({experience}) => {
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const pageTop = window.pageYOffset;
            const pageBottom = pageTop + window.innerHeight;
            
            let newActiveSection = 0;
            sectionRefs.current.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (sectionTop < pageBottom && sectionBottom > pageTop) {
                // If more than half of the section is visible
                if (sectionTop < pageBottom - window.innerHeight/2) {
                newActiveSection = index;
                }
            }
            });
            
            setActiveSection(newActiveSection);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex w-full flex-col lg:flex-row rounded-4xl p-10 bg-[#131313] space-y-10">
            <div className="w-full lg:w-1/2 max-h-66 overflow-y-auto">
                {experience.sections.map((section, sectionIndex) => (
                    <FadeInSection>
                    <div 
                        key={sectionIndex}
                        className="pb-10"
                    >
                        <div className="font-semibold mb-2">{section.title}</div>
                        <p className="text-white">{section.description}</p>
                    </div>
                    </FadeInSection>
                ))}
            </div>
            <div className="w-full flex lg:w-1/2 rounded-lg items-center justify-center">
                <img className="w-3/4 flex rounded-xl" src={experience.img} alt="" />    
            </div>
            
        </div>
    );
}

const FadeInSection = ({ children, threshold = 0.3 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      }, { threshold });
      
      const { current } = domRef;
      if (current) {
        observer.observe(current);
      }
      
      return () => {
        if (current) {
          observer.unobserve(current);
        }
      };
    }, [threshold]);
    
    return (
      <div
        ref={domRef}
        className={`transition-opacity duration-1000 ease-in-out ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
      >
        {children}
      </div>
    );
  };