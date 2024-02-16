import React from "react";
// import './footer.css'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { logo, gif } from "../../Utils/Constants";
import { MJ_LinkedIn, MJ_insta,MJ_github,MJ_twitter } from '../../Utils/Constants'
const Footer = () => {
  return (
    <>
      <footer className="w-full h-[333px] footer-bg  ">
        <img className="footer-logo ml-5 " src={logo}></img>
        <div className="flex flex-row justify-around invisible tablet:visible">
          <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <input className="p-3 w-[300px] mt-16 outline-none text-[14px] text-[white] bg-[#ffffff40] placeholder:text-[#d66363]" type="email" placeholder="abc@gmail.com"></input>
            <button className="bg-[#03040550] hover:bg-[#030405] text-[#fff] mt-16 p-3">Subscribe</button>
          
          </div>
          <p className="text-[20px] text-[#ffffff60]">Subscribe us to get more Info...</p>
          </div>
        <div className="flex items-center justify-center flex-col ml-4 invisible tablet:visible">
        <div className=' h-[3rem] w-[13.6rem]  text-white flex justify-between text-[1.25rem] font-Poppins font-[500] leading-[150%]'>
            
               <a href={MJ_LinkedIn} target='_blank'><i className="fa-brands fa-linkedin-in w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#ffffff20] shadow-sm shadow-[#ffffff90] p-[0.75rem] hover:cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>
                <a href={MJ_github}  target='_blank'>  <i className="fa-brands fa-github w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#ffffff20] shadow-sm  shadow-[#ffffff90] p-[0.75rem] hover:cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725] "></i></a>
                <a href={MJ_insta}  target='_blank'><i className="fa-brands fa-instagram w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#ffffff20] shadow-sm  shadow-[#ffffff90] p-[0.75rem] cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>
                <a href={MJ_twitter}  target='_blank'><i className="fa-brands fa-x-twitter w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#ffffff20] shadow-sm shadow-[#ffffff90] p-[0.75rem] cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>

         </div>
         <p className="text-[25px] mt-5 font-semibold text-[#ffffff60]">Connect with us...<i class="fa-regular fa-face-smile text-[#ffffff20]"></i></p>
         </div>
         <div className="h-[10rem] w-[13rem] rounded-2xl shadow-[#d66363] shadow-sm  blur-1 bg-[#ffffff09] hover:bg-[#F4572509] hover:shadow-[#ffffff09] text-[19px] font-serif text-[#ffffff70] p-4 ">
          <h3>Address:</h3>
          <p>KIIT,Patia</p>
          <p>Bhubaneswar</p>
          <p>Odisha(751024)</p>
          <p>India</p>
         </div>
         </div>

      </footer>
    </>
  );
};

export default Footer;
