
  
// In your NavbarComponent.jsx
export const NavbarComponent = () => {
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
    );
};