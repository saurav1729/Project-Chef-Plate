import { hero_image } from "../../Utils/Constants";

import hero_bg from "../../resources/hero_bg.jpg"
// import './Hero.css'



const Hero = () => {
  return (
    <div className="tablet:relative h-auto w-auto ">
      <div className="tablet:absolute tablet:h-[430px] w-[100%] tablet:top-0 tablet:-z-2">
        <img  className="tablet:w-[100%] tablet:h-[100%] tablet:object-cover " src={hero_bg} ></img>
      </div>

    <div
      className=" flex flex-row tablet:h-[330px] tablet:mx-[39px]  tablet:p-3 tablet:w-auto  rounded-[21px] inset-shadow justify-between tablet:z-2"
    >
      <div className="text-container  text-center w-[50%] flex flex-col translate-y-14  text-pretty justify-around h-auto relative text-animation mb-4 ">
        <div className="welcome-text text-[42px] italic text-center my-auto   font-[fangsong] me-[40px]  bg-clip-text text-[transparent]"   style={{
              backgroundImage:
                "linear-gradient(to right, #ae59d0,#fff,#ae59d050)",
            }}>
            Welcome To Chefs Plate
          <span>🍽️</span>
        </div>

        <div className="hero-style-container flex  items-end justify-evenly">
          <div className="inside-box flex flex-col justify-center w-auto h-auto ">
            <div className="order-image rounded-[50%] w-[121px] h-[126px] mb-[22px] object-cover orderImage bg-no-repeat bg-center"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">Order</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto h-auto">
            <div className="deliver-image rounded-[50%] w-[121px] h-[126px] mb-[22px] object-cover deliveryImage"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">deliver</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto h-auto">
            <div className="eat-image rounded-[50%] w-[121px] h-[126px] mb-[22px] object-cover eatImage"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">Eat</h4>
          </div>
        </div>
      </div>
      <div className="invisible tablet:visible rounded-[20px] w-[47%]  m-2 h-auto  relative  translate-y-14 hero-image-shadow image-animation">
        <img  className="invisble tablet:visible  object-cover rounded-[24px] w-[100%] h-[100%] " src={hero_image}></img>
      </div>
    </div>
    </div>
  );
};

export default Hero;
