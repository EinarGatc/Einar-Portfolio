
  
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
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md text-xl">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div>Einar Gatchalian</div>
            <div className="flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-[#F6BD60]">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#F6BD60]">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#F6BD60]">Contact</button>
            </div>
          </div>
        </div>
      </nav>
    );
};