const MainView = ({ darkMode }) => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-3 mt-10 md:mr-30 md:flex md:flex-row md:space-x-6">
      <div
        className={
          darkMode
            ? "flex flex-col w-56 h-40 mt-3 relative hover:bg-HoverLight cursor-pointer bg-LightGrayishBlueCardBg space-y-2"
            : "flex flex-col w-56 h-40 mt-3 relative hover:bg-Hover cursor-pointer bg-DarkDesaturatedBlueCardBg space-y-2"
        }
      >
        <span className="w-56 h-0.5 bg-Facebook"></span>
        <div className="flex justify-center space-x-1 items-center text-xs">
          <img src="./images/icon-facebook.svg" className="fb" alt="fb" />
          <p className="text-DesaturatedBlueText mt-2 text-xs">@nathanf</p>
        </div>
        <div>
          <h1
            className={
              darkMode
                ? "text-Black text-4xl mt-2 text-center font-bold"
                : "text-WhiteText text-4xl mt-2 text-center font-bold"
            }
          >
            1987
          </h1>
          <h6 className="follow text-DesaturatedBlueText text-sm tracking-widest text-center">
            FOLLOWERS
          </h6>
        </div>
        <div className="flex space-x-1 justify-center">
          <img src="./images/icon-up.svg" className="h-1 w-1 mt-4" alt="up" />
          <p className="text-[0.5rem] text-LimeGreen font-bold mt-3">
            12 Today
          </p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "flex flex-col w-56 h-40 relative hover:bg-HoverLight cursor-pointer bg-LightGrayishBlueCardBg space-y-2"
            : "flex flex-col w-56 h-40 relative hover:bg-Hover cursor-pointer bg-DarkDesaturatedBlueCardBg space-y-2"
        }
      >
        <span className="w-56 h-0.5 bg-Twitter"></span>
        <div className="flex justify-center space-x-1 items-center text-xs">
          <img
            src="./images/icon-twitter.svg"
            className="twitter"
            alt="twitter"
          />
          <p className="text-DesaturatedBlueText mt-2 text-xs">@nathanf</p>
        </div>
        <div>
          <h1
            className={
              darkMode
                ? "text-Black text-4xl mt-2 text-center font-bold"
                : "text-WhiteText text-4xl mt-2 text-center font-bold"
            }
          >
            1044
          </h1>
          <h6 className="follow text-DesaturatedBlueText text-sm tracking-widest text-center">
            FOLLOWERS
          </h6>
        </div>
        <div className="flex space-x-1 justify-center">
          <img src="./images/icon-up.svg" className="h-1 w-1 mt-4" alt="up" />
          <p className="text-[0.5rem] text-LimeGreen font-bold mt-3">
            99 Today
          </p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "flex flex-col w-56 h-40 relative hover:bg-HoverLight cursor-pointer bg-LightGrayishBlueCardBg space-y-2"
            : "flex flex-col w-56 h-40 relative hover:bg-Hover cursor-pointer bg-DarkDesaturatedBlueCardBg space-y-2"
        }
      >
        <span className="w-56 h-0.5 bg-gradient-to-r from-InstagramFrom to-InstagramTo"></span>
        <div className="flex justify-center space-x-1 items-center text-xs">
          <img src="./images/icon-instagram.svg" className="ig" alt="ig" />
          <p className="text-DesaturatedBlueText mt-2 text-xs">@realnathanf</p>
        </div>
        <div>
          <h1
            className={
              darkMode
                ? "text-Black text-4xl mt-2 text-center font-bold"
                : "text-WhiteText text-4xl mt-2 text-center font-bold"
            }
          >
            11k
          </h1>
          <h6 className="follow text-DesaturatedBlueText text-sm tracking-widest text-center">
            FOLLOWERS
          </h6>
        </div>
        <div className="flex space-x-1 justify-center">
          <img src="./images/icon-up.svg" className="h-1 w-1 mt-4" alt="up" />
          <p className="text-[0.5rem] text-LimeGreen font-bold mt-3">
            1099 Today
          </p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "flex flex-col w-56 h-40 relative hover:bg-HoverLight cursor-pointer bg-LightGrayishBlueCardBg space-y-2"
            : "flex flex-col w-56 h-40 relative hover:bg-Hover cursor-pointer bg-DarkDesaturatedBlueCardBg space-y-2"
        }
      >
        <span className="w-56 h-0.5 bg-YouTube"></span>
        <div className="flex justify-center space-x-1 items-center text-xs">
          <img src="./images/icon-youtube.svg" className="yt" alt="yt" />
          <p className="text-DesaturatedBlueText mt-2 text-xs">Nathan F.</p>
        </div>
        <div>
          <h1
            className={
              darkMode
                ? "text-Black text-4xl mt-2 text-center font-bold"
                : "text-WhiteText text-4xl mt-2 text-center font-bold"
            }
          >
            8239
          </h1>
          <h6 className="follow text-DesaturatedBlueText text-sm tracking-widest text-center">
            SUBSCRIBERS
          </h6>
        </div>
        <div className="flex space-x-1 justify-center">
          <img
            src="./images/icon-down.svg"
            className="w-1 h-1 mt-4"
            alt="down"
          />
          <p className="text-[0.5rem] text-BrightRed font-bold mt-3">
            144 Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainView;
