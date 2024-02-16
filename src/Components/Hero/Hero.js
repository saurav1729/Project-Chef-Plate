import { hero_image } from "../../Utils/Constants";

import hero_bg from "../../resources/hero_bg.jpg"
// import './Hero.css'



const Hero = () => {
  return (
    <div className="tablet:relative h-auto w-auto ">
      <div className="absolute tablet:h-[430px] h-[390px] w-[100%] top-0 -z-2">
        <img  className="w-full h-full object-cover " src={hero_bg} ></img>
      </div>

    <div
      className=" tablet:flex tablet:flex-row h-[330px] tablet:mx-[39px]   tablet:p-3  tablet:w-auto  tablet:rounded-[21px] tablet:inset-shadow  tablet:justify-between z-2"
    >
      <div className="text-container  text-center tablet:w-[50%] h-full w-full flex flex-col tablet:translate-y-14  text-pretty tablet:justify-around  relative tablet:text-animation tablet:mb-4 ">
        <div className="welcome-text  tablet:text-[42px] text-[28px]  italic text-center my-auto   font-[fangsong] me-[40px]  bg-clip-text text-[transparent]"   style={{
              backgroundImage:
                "linear-gradient(to right, #ae59d0,#fff,#ae59d050)",
            }}>
            Welcome To Chefs Plate
          <span>🍽️</span>
        </div>

        <div className="hero-style-container flex justify-evenly ">
          <div className="inside-box flex flex-col justify-center w-auto h-auto ">
            <div className="order-image rounded-[50%] w-[121px] h-[126px] mb-[22px] object-cover orderImage bg-no-repeat bg-center"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">Order</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto h-auto">
            <div className="deliver-image rounded-[50%] w-[121px] h-[126px] mb-[22px] object-cover deliveryImage z-10"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">deliver</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto h-auto">
            <div className="eat-image rounded-[50%] w-[121px] h-[126px] tablet:mb-[22px]  eatImage object-cover tablet:eatImage"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">Eat</h4>
          </div>
        </div>
      </div>
      <div className=" invisible tablet:visible tablet:rounded-[20px] tablet:w-[47%]  tablet:m-2 h-auto  tablet:relative  tablet:translate-y-14 tablet:hero-image-shadow tablet:image-animation">
        <img  className="tablet:object-cover tablet:rounded-[24px] tablet:w-[100%] tablet:h-[100%] " src={hero_image}></img>
      </div>
    </div>
    </div>
  );
};

export default Hero;
