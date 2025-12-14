// import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MiniScreen = ({ isPowerOn }) => {
  return (
    <div className="relative col-span-2 row-span-1 rounded-lg md:rounded-xl border-[0.5px] md:border-[1px] border-[#000] overflow-hidden">
      <div
        className="absolute inset-0 "
        style={{
          boxShadow: isPowerOn
            ? "inset -4px -4px 10px #000, inset 4px 4px 10px #000"
            : "inset -6px -6px 10px #000, inset 6px 6px 10px #000",
          backgroundColor: isPowerOn ? "#333" : "#000",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
      </div>

      <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-tl from-[#111]/85 to-transparent"></div>

      {isPowerOn && (
        <div className="absolute inset-0 flex items-center justify-center font-Roboto text-[#fff] text-[7px] md:text-[12px] text-center font-normal pointer-events-none">
          COMING SOON
        </div>
      )}

    </div>
  );
};

MiniScreen.propTypes = {
  isPowerOn: PropTypes.bool,
};

MiniScreen.defaultProps = {
  isPowerOn: false,
};

export default MiniScreen;
