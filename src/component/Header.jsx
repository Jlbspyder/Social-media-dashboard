const MainView = ({ darkMode, theme }) => {
  return (
    <header className="container mx-auto flex flex-col space-y-3 md:flex md:items-center relative">
      <div className="container flex flex-col">
        <div
          className={
            darkMode
              ? "text-3xl pt-5 font-bold text-Black md:text-xl"
              : "text-3xl pt-5 font-bold text-WhiteText md:text-xl"
          }
        >
          Social Media Dashboard
        </div>
        <p className="text-lg font-bold text-DesaturatedBlueText md:text-[10px] md:-mt-[8px]">
          Total Followers: 23,004
        </p>
      </div>
      <span className="absolute left-[0] top-[75px] w-[370px] h-[1px] bg-switch md:hidden"></span>
      <div className="flex justify-between md:flex space-x-2 md:ml-[850px]">
        <div
          className={
            darkMode
              ? "text-DesaturatedBlueText mt-3 text-xs md:-mt-[45px] mr-1 font-bold"
              : "text-WhiteText mt-3 md:-mt-[45px] text-xs mr-1 font-bold"
          }
        >
          Dark Mode
        </div>
        <div
          className={
            darkMode
              ? "relative w-8 h-4 bg-switch hover:bg-LimeGreen cursor-pointer right-1 rounded-2xl mt-3 md:-mt-[45px]"
              : "relative w-8 h-3.5 bg-LimeGreen hover:bg-gradient-to-r from-toggleFrom to-toggleTo cursor-pointer right-1  md:-mt-[45px] rounded-2xl mt-3"
          }
        >
          {!darkMode && (
            <span
              className="absolute right-[17.5px] top-[0.3px] w-3.5 h-[14px] bg-DarkDesaturatedBlueCardBg 
                    rounded-full cursor-pointer darkmode"
              onClick={theme}
            ></span>
          )}
          {darkMode && (
            <span
              className="absolute right-[2px] top-[0.4px] w-3.5 h-[14px] bg-WhiteBg 
                    rounded-full md:top-[1px] cursor-pointer lightmode"
              onClick={theme}
            ></span>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainView;
