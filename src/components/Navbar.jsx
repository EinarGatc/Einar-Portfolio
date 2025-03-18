import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
// In your NavbarComponent.jsx
export const NavbarComponent = () => {

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div>
      {isMobile ? (
        <div className="py-3">
          <div className="flex flex-col justify-between items-center">
            <div className="flex w-full justify-between items-center"> 
              <div>Einar</div>
              <Hamburger
                toggled={open}
                toggle={setOpen}
              />  
            </div>
            {open && 
              <div className="flex flex-col items-center w-full space-y-2">
                <button onClick={() => scrollToSection('about')} className="flex items-center hover:text-[#F6BD60]">About</button>
                <button onClick={() => scrollToSection('portfolio')} className="flex items-center hover:text-[#F6BD60]">Portfolio</button>
                <button onClick={() => scrollToSection('contact')} className="flex items-center hover:text-[#F6BD60]">Contact</button>
              </div>
            }
          </div>

        </div>
      ) : (
        <div className="py-3">
          <div className="flex justify-between items-center">
            <div>Einar</div>
            <div className="flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-[#F6BD60]">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#F6BD60]">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#F6BD60]">Contact</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};