import kitchenBackground from "../assets/images/kitchenBackground.jpg";
import coffeTricksBanner001 from "../assets/images/coffe-tricks-banner-1.png";
import coffeTricksBanner002 from "../assets/images/coffe-tricks-banner-2.png";
import coffeTricksBanner003 from "../assets/images/coffe-tricks-banner-3.png";

export const IntroSection = () => {
  return (
    <div className="kitchenAppBg h-auto bg-blue-800 flex justify-center items-center py-[2.6rem]">
      <div className="w-[95%] md:w-[89%] lg:w-[68.8%] h-auto flex flex-col gap-[1.9rem]">
        <img
          src={coffeTricksBanner001}
          alt="coffe tricks banner"
          className="w-full"
        />
        <img
          src={coffeTricksBanner002}
          alt="coffe tricks banner"
          className="w-full"
        />
        {/**Button "Show me the coffee Tweak" */}
        <div className="w-full h-auto lg:h-[7rem] flex justify-center">
          <button className="w-auto h-full md:w-full font-semibold bg-customYellowBg text-white md:text-[3.4rem] rounded-[4px] hover:bg-hoverYellowBg px-[1.563rem] py-[0.625rem] lg:px-[1.1rem] lg:py-0 border-[1px] border-[#000000] border-opacity-[0.2]">
            Show me the coffee Tweak
          </button>
        </div>

        <img src={coffeTricksBanner003} alt="advertising to customer" />
      </div>
    </div>
  );
};
