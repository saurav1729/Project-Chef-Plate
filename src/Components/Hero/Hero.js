import { hero_image } from "../../Utils/Constants";
import { useState } from "react";
import hero_bg from "../../resources/hero_bg.jpg"
import { Link } from "react-router-dom";
// import './Hero.css'








const Hero = () => {
  
const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="tablet:relative h-auto w-auto ">
          <button className="absolute top-3 right-2 p-2 bg-[#ffffff20] text-[white] rounded-lg mr-4 z-30 " onClick={() => {
          setShowOptions((option)=>!option); 
        }}><i class=" fa-solid fa-bars"></i></button>
        { showOptions &&<div className=' tablet:hidden absolute w-screen h-[330px] top-0 navbarAnimation transition-all ease-out duration-900   left-0 rounded-b-xl bg-[black] bg-opacity-90 bg-blur-sm  z-10' >
          <ul className=" flex flex-col justify-center text-center p-[30px] list-none   w-auto  text-xl font-bold gap-8    ">
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] ] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/">Home</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange  bg-clip-text text-[transparent] hover:bg-purple hover:text-[#fff] hover:scale-75 font-bold cursor-pointer shadow-lg shadow-[#ac71a8]  mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/about">About</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/contact">Contact</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold hover:text-[#fff] cursor-pointer hover:scale-75 hover:shadow-lg shadow-lg  shadow-[#ac71a8]   mobile:p-2 mobile:rounded-lg inset-shadow" onClick={() => {
                  // if (loginValue === "Log out") {
                  //     setLoginValue("Log in");
                  // } else {
                  //     setLoginValue("Log out");
                  // }
              }}>
                  <Link to="/contact">Login</Link>
              </li>
          </ul>
        </div>
}
      <div className="absolute tablet:h-[430px] rounded-b-[30px] h-[390px] w-[100%] top-0 -z-2">
        <img  className="w-full h-full rounded-b-[30px] object-cover  " src={hero_bg} ></img>
      </div>

    <div
      className=" tablet:flex tablet:flex-row h-[330px] tablet:mx-[39px]   tablet:p-3  tablet:w-auto  tablet:rounded-[21px] tablet:inset-shadow  tablet:justify-between z-2"
    >
      <div className="text-container mt-12 tablet:mt-0 text-center tablet:w-[50%] h-full w-full flex flex-col tablet:translate-y-14  text-pretty tablet:justify-around  relative tablet:text-animation tablet:mb-4 ">
        <div className="welcome-text  tablet:text-[42px] text-[28px]  italic text-center my-auto   font-[fangsong] me-[40px]  bg-clip-text text-[transparent]"   style={{
              backgroundImage:
                "linear-gradient(to right, #ae59d0,#fff,#ae59d050)",
            }}>
            Welcome To Chefs Plate
          <span>🍽️</span>
        </div>

        <div className="hero-style-container flex  justify-evenly ">
          <div className="inside-box flex flex-col justify-center w-auto  tablet:h-auto h-[200px]  ">
            <div className="order-image rounded-[50%] w-[121px] h-[126px] mb-[22px] tablet:object-cover orderImage bg-no-repeat bg-center"></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">Order</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto tablet:h-auto h-[200px]">
            <div className="deliver-image rounded-[50%] w-[121px] h-[126px] mb-[22px] tablet:object-cover tablet:deliveryImage deliveryImageM "></div>
            <h4 className="text-[transparent] bg-gradient-to-r from-blue via-purple to-orange bg-clip-text outline-none text-[30px] [text-shadow:2px_2px_3px_rgba(255,255,255,0.5)] [font:bold_30px_arial_sans-serif] font-bold italic">deliver</h4>
          </div>
          <div className="inside-box flex flex-col justify-center w-auto tablet:h-auto h-[200px]">
            <div className="eat-image rounded-[50%] w-[121px] h-[126px] tablet:mb-[22px]  eatImage tablet:object-cover object-contain eatImage"></div>
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
