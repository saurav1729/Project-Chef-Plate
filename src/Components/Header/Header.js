import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
// import { header_bg } from "../../Utils/Constants";

import header_bg from "../../resources/Header.jpg"
import { Link } from "react-router-dom";


const Header = () => {
  const [loginValue, setLoginValue] = useState("Log in");

  return (
     <div className="w-screen tablet:h-[70px]">
      <div className=" w-screen h-[69px] top-0 z-10 fixed">
              <img className="w-[100%] h-[100%] object-cover rotate-180" src={header_bg}></img>
      </div>





      <div className=" w-screen flex justify-between shadow-[0_0_19px] shadow-[#efaacf] fixed top-0 z-10 ">
          <div className="rounded-full w-[4.3rem] h-[4.3rem]">
              <img className="object-cover h-[4.3rem] w-[4.3rem]" src={LOGO_URL} alt="Logo" />
          </div>

          <ul className="flex justify-evenly list-none h-100% items-center w-auto text-xl font-bold tablet:gap-10 mr-6 text-[1.3rem]">
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] border border-[red] p-2 rounded-lg inset-shadow">
                  <Link to="/">Home</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange  bg-clip-text text-[transparent] hover:bg-purple hover:text-[#fff] hover:scale-75 font-bold cursor-pointer shadow-lg shadow-[#ac71a8] border  border-[red] p-2 rounded-lg inset-shadow">
                  <Link to="/about">About</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] border   border-[red] p-2 rounded-lg inset-shadow">
                  <Link to="/contact">Contact</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold hover:text-[#fff] cursor-pointer hover:scale-75 hover:shadow-lg shadow-lg border shadow-[#ac71a8]  border-[red] p-2 rounded-lg inset-shadow" onClick={() => {
                  if (loginValue === "Log out") {
                      setLoginValue("Log in");
                  } else {
                      setLoginValue("Log out");
                  }
              }}>
                  <Link to="/contact">{loginValue}</Link>
              </li>
          </ul>
      </div>
      </div>
  );
}

export default Header;

