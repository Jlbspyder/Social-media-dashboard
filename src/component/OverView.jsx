import React from "react";

const OverView = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode
            ? "container mx-auto text-DesaturatedBlueText text-left text-xl font-bold  md:text-lg md:pl-0 md:pt-3 pl-20 pt-5 md:font-bold md:text-left md:text-DesaturatedBlueText"
            : "container mx-auto text-WhiteBg text-left text-xl font-bold md:text-lg md:text-left md:pl-0 md:pt-3 pl-20 pt-5 md:font-bold md:text-WhiteBg"
        }
      >
        Overview - Today
      </div>
      <div className="container mx-auto flex flex-col space-y-2 items-center mt-5 md:mr-30 md:grid md:grid-cols-4 md:gap-4">
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Page Views
              </p>
              <img
                src="./images/icon-facebook.svg"
                alt="fb"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                87
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-up.svg"
                  alt="up"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-LimeGreen text-[0.5rem] mt-3">3%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Likes
              </p>
              <img
                src="./images/icon-facebook.svg"
                alt="fb"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                52
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-down.svg"
                  alt="down"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-BrightRed text-[0.5rem] mt-3">2%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Likes
              </p>
              <img
                src="./images/icon-instagram.svg"
                alt="ig"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                5462
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-up.svg"
                  alt="up"
                  className="h-1 w-1 mt-3"
                />
                <p className="text-LimeGreen text-[0.5rem] mt-3">2257%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Profile Views
              </p>
              <img
                src="./images/icon-instagram.svg"
                alt="ig"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                52k
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-up.svg"
                  alt="up"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-LimeGreen text-[0.5rem] mt-3">1375%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Retweets
              </p>
              <img
                src="./images/icon-twitter.svg"
                alt="twitter"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                117
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-up.svg"
                  alt="up"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-LimeGreen text-[0.5rem] mt-3">303%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Likes
              </p>
              <img
                src="./images/icon-twitter.svg"
                alt="twitter"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                507
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-up.svg"
                  alt="up"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-LimeGreen text-[0.5rem] mt-3">553%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Likes
              </p>
              <img
                src="./images/icon-youtube.svg"
                alt="yt"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                107
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-down.svg"
                  alt="down"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-BrightRed text-[0.5rem] mt-3">19%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              darkMode
                ? "bg-LightGrayishBlueCardBg w-56 h-20 hover:bg-HoverLight cursor-pointer"
                : "bg-DarkDesaturatedBlueCardBg w-56 h-20 hover:bg-Hover cursor-pointer"
            }
          >
            <div className="flex justify-around">
              <p className="text-DesaturatedBlueText font-bold mt-3 text-[0.6rem]">
                Total Views
              </p>
              <img
                src="./images/icon-youtube.svg"
                alt="yt"
                className="w-4 h-4 mt-3 ml-20"
              />
            </div>
            <div className="flex justify-around space-x-5">
              <h2
                className={
                  darkMode
                    ? "text-Black mt-3 text-2xl font-bold"
                    : "text-WhiteText mt-3 text-2xl font-bold"
                }
              >
                1407
              </h2>
              <div className="flex items-center">
                <img
                  src="./images/icon-down.svg"
                  alt="down"
                  className="h-1 w-1 mt-3 ml-20"
                />
                <p className="text-BrightRed text-[0.5rem] mt-3">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jlbspyder" target="_blank">
          JLBSPYDER
        </a>
        .
      </div>
    </>
  );
};

export default OverView;
