import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import header_bg from "../../resources/Header.jpg"
import { Link } from "react-router-dom";


const Header = () => {
  const [loginValue, setLoginValue] = useState("Log in");

  return (
     <div className="w-screen tablet:h-[70px]">
      <div className=" w-screen h-[4.7rem] top-0 z-20 fixed">
              <img className="w-[100%] h-[100%] object-cover rotate-180" src={header_bg}></img>
      </div>





      <div className=" w-screen flex justify-between items-center shadow-[0_0_19px] shadow-[#efaacf] fixed top-0 z-20 ">
          <div className="rounded-full w-[4.7rem] h-[4.7rem]">
              <img className="object-cover h-[4.7rem] w-[4.7rem]" src={LOGO_URL} alt="Logo" />
          </div>
           


          <ul className=" hidden  tablet:flex justify-evenly gap-2 list-none  items-center w-auto  text-sm mobile:text-xl font-bold tablet:gap-10 mobile:mr-6 mr-3  ">
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] mobile:border mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/">Home</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange  bg-clip-text text-[transparent] hover:bg-purple hover:text-[#fff] hover:scale-75 font-bold cursor-pointer shadow-lg shadow-[#ac71a8] mobile:border  mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/about">About</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] hover:scale-75 shadow-lg shadow-[#ac71a8] mobile:border   mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/contact">Contact</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold hover:text-[#fff] cursor-pointer hover:scale-75 hover:shadow-lg shadow-lg mobile:border shadow-[#ac71a8]  mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow" onClick={() => {
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

