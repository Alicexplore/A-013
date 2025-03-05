import PropTypes from "prop-types";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Stack from "../pages/Stack";
import Contact from "../pages/Contact";
import Instructions from "../pages/Instructions";

const Menu = ({ currentComponent }) => {
  return (
    <div className="absolute flex w-full h-full items-center justify-center">
      {currentComponent === "instructions" && <Instructions />}
      {currentComponent === "about" && <About />}
      {currentComponent === "projects" && <Projects />}
      {currentComponent === "stack" && <Stack />}
      {currentComponent === "contact" && <Contact />}
    </div>
  );
};

Menu.propTypes = {
  currentComponent: PropTypes.string.isRequired, 
  setCurrentComponent: PropTypes.func.isRequired, 
};

export default Menu;
