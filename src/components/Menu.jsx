import { useState } from 'react';
import About from '../pages/About'; 
import Projects from '../pages/Projects';
import Settings from '../pages/Settings';
import Contact from '../pages/Contact'; 

const Menu = () => {
  const [activePage, setActivePage] = useState('menu');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const goBackToMenu = () => {
    setActivePage('menu');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About goBackToMenu={goBackToMenu} />;
      case 'projects':
        return <Projects goBackToMenu={goBackToMenu} />;
      case 'settings':
        return <Settings goBackToMenu={goBackToMenu} />;
      case 'contact':
        return <Contact goBackToMenu={goBackToMenu} />;
      default:
        return (
          <div className="absolute w-full h-full items-center justify-center flex pointer">
            <div className="w-[80%] h-[80%] p-2 ">
              <h2 className="text-center text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase pointer-events-none">menu</h2>
              <ul className="space-y-1 md:space-y-4 mt-6 md:mt-12">
                <li>
                  <button
                    className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors"
                    onClick={() => handleMenuClick('about')}
                  >
                    <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span> About
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors"
                    onClick={() => handleMenuClick('projects')}
                  >
                    <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span> Projects
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors"
                    onClick={() => handleMenuClick('settings')}
                  >
                    <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span> Settings / Infos
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors"
                    onClick={() => handleMenuClick('contact')}
                  >
                    <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span> Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default Menu;
