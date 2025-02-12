const Menu = () => {

    return (
      <div className="w-full h-full items-center justify-center flex">
        <div className="bg-[#333] w-[80%] h-[80%] p-2">
          <h2 className="text-center mb-4 text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase hover:text-[#333] text-left p-2 hover:bg-gray-100 transition-colors"
             
              >
                <ion-icon name="caret-forward-outline"></ion-icon> About
              </button>
            </li>
            <li>
            <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase hover:text-[#333] text-left p-2 hover:bg-gray-100 transition-colors"
             
              >
                <ion-icon name="caret-forward-outline"></ion-icon> About
              </button>
            </li>
            <li>
            <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase hover:text-[#333] text-left p-2 hover:bg-gray-100 transition-colors"
             
              >
                <ion-icon name="caret-forward-outline"></ion-icon> About
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
  