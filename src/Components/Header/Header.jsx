import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  const [loginValue, setLoginValue] = useState("Log in");

  return (
     <div className="w-full tablet:h-[65px]  fixed top-0 left-0 z-10">
  





      <div className=" w-screen flex justify-between items-center h-[3.5rem]  fixed  z-20 pr-4 pt-1 bg-[#1c1c1c]   ">
          <div className="rounded-full w-[6.7rem] h-[90%] my-auto  tablet:3.5rem">
              <img className="object-cover  w-full h-full  ml-2" src={LOGO_URL} alt="Logo" />
          </div>
           


          <ul className=" hidden  tablet:flex justify-evenly gap-2 list-none  items-center w-auto  text-sm mobile:text-xl font-bold tablet:gap-10 mobile:mr-6   ">
          
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] scale-75 shadow-lg shadow-[#ac71a8] mobile:border mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/">Home</Link>
              </li>
              
              <li className="bg-gradient-to-r from-[red] to-orange  bg-clip-text text-[transparent] hover:bg-purple hover:text-[#fff] scale-75 font-bold cursor-pointer shadow-lg shadow-[#ac71a8] mobile:border  mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/about">About</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold cursor-pointer hover:text-[#fff] scale-75 shadow-lg shadow-[#ac71a8] mobile:border   mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow">
                  <Link to="/contact">Contact</Link>
              </li>
              <li className="bg-gradient-to-r from-[red] to-orange bg-clip-text text-[transparent] font-bold hover:text-[#fff] cursor-pointer scale-75 hover:shadow-lg shadow-lg mobile:border shadow-[#ac71a8]  mobile:border-[red] mobile:p-2 mobile:rounded-lg inset-shadow" onClick={() => {
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

