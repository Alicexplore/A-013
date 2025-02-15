const Menu = () => {

    return (
      <div className="w-full h-full items-center justify-center flex">
        <div className="w-[80%] h-[80%] p-2 mt-6">
          <h2 className="text-center mb-10 text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase">menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex
                hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors">
                <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span>  about 
              </button>
            </li>
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex
                hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors">
                <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span>  projects
              </button>
            </li>
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex
                hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors">
                <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span>  next features
              </button>
            </li>
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex
                hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors">
                <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span>  contact
              </button>
            </li>
            <li>
              <button
                className="w-full text-[#fff] font-Roboto text-[9px] md:text-xs tracking-widest uppercase flex
                hover:text-[#333] gap-2 text-left p-2 hover:bg-[#D9D9D9] transition-colors">
                <span className="mt-[1.5px]"><ion-icon name="caret-forward-outline"></ion-icon></span>  settings / infos
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
  