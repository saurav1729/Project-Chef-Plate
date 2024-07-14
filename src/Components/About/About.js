import { cloud } from "../../Utils/cloud.png";
import { Meteors } from "../Meteors";
import { TextGenerateEffect } from "../UI/text-generate-effect";

const words = `About This Project(Chefs Plate)`;


const About = () => {

 
  return (
     <>
        
         
    <div className="relative overflow-hidden bg-[#1c1c1f] max-w-[1512px] mx-auto tablet:mt-[-20px]">
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={100} />
      </div>  {/* <img className=" absolute h-[500px] w-[500px] z-10  " src={cloud}></img> */}

      <div className=" tablet:w-full  tablet:min-height overflow-hidden ">
        <div className="h-auto  mt-[100px] w-11/12 mx-auto border shadow-lg rounded-lg shadow-[#265a9d66] mb-[3rem] overflow-hidden">
        <div className=" w-full text-center tablet:text-[2rem] font-[600]  tablet:font-sans tablet:font-bold bg-gradient-to-r from-orange via-[#d66363] to-orange bg-clip-text text-[transparent] tablet:bg-clip-text tablet:text-[transparent] tablet:text-stroke tablet:text-stroke-indigo-200 tablet:text-stroke-fill-indigo-600">
        <TextGenerateEffect words={words} />
        </div>
        <div className="mt-[2rem] w-[90%] text-[#ffffff90] mx-auto">
          <p className="tablet:text-[1.3rem] text-[0.8rem] text-[#ffffff90]">
            {" "}
            <b className="text-[#265a9d66]">
              "Chefs Plate"
            </b>{" "}
            is a React-based web application created for practice and
            demonstration. The project features a{" "}
            <u className="">
              configuration-driven user interface
            </u>{" "}
            and integrates{" "}
            <u className="">
              the Swiggy API
            </u>{" "}
            to fetch restaurant and menu data. Serving as a demo website for a
            food delivery service, it showcases essential functionalities like a{" "}
            <b className=""> 
              configurable UI, search feature, and contact forms, all in a
              single-page application format.
            </b>
          </p>
        </div>
        
       
        <div className="flex  mobile:flex-row justify-between items-center mx-auto mt-[2rem] w-[90%]">
        <div className="Features    tablet:ml-[1rem]">
          <h3 className=" tablet:ml-5  bg-gradient-to-r from-orange via-[#d66363]  bg-clip-text text-[transparent] font-bold tablet:text-[1.8rem]">Key Features</h3>
          <ul className="tablet:mt-[1rem] tablet:w-[19rem] text-[0.9rem] tablet:text-[1.3rem] text-[#ffffff90]">
            <li>📌 Shimmer UI </li>
            <li>📌 Search Functionality</li>
            <li>📌 Seamless Contact Forms</li>
            <li className="">📌 Single Page Application</li>
          </ul>
        </div>
        <div className="Features   tablet:right-0">
          <h3 className="tablet:ml-[2rem]  bg-gradient-to-r from-orange via-[#d66363] to-orange  bg-clip-text text-[transparent] font-bold tablet:text-[1.8rem]">Technologies Used</h3>
          <ul className="tablet:mt-[1rem] tablet:w-[19rem] text-[0.9rem]  tablet:text-[1.3rem] text-[#ffffff90]">
            <li>📌 React</li>
            <li>📌 Html,Css,Javascript</li>
            <li>📌 Tailwind,css</li>
           
          </ul>
        </div>
        </div>
        <div className=" tablet:mt-[2rem]  tablet:text-[1.3rem] w-full text-center  font-semibold  tablet:w-[500px] mx-auto">
              <h2 className=" tablet:p-2 rounded-lg shadow-sm tablet:shadow-gray tablet:bg-gradient-to-bl bg-gradient-to-r from-orange via-[#d66363] to-orange bg-clip-text text-[transparent] text-stroke text-stroke-indigo-200 text-stroke-fill-indigo-600">Notice(Limited Menu Display)</h2>
         </div>
         <p className=" p-3  w-[90%]  mx-auto text-pretty tablet:text-[1.34rem] text-[#ffffff90]">If you encounter shimmering UI instead of menus when clicking on restaurants, it's likely due to a CORS (Cross-Origin Resource Sharing) issue. To ensure uninterrupted access to our delectable offerings, we recommend using a VPN like Proton VPN.</p>

        <h2 className=" tablet:mt-[1rem] text-stroke  shadow-sm shadow-gray-light rounded-md text-stroke-blue w-1/6 text-center mx-auto font-bold tablet:text-[2rem] ">Author:</h2>
     

        <div className="name  tablet:mt-[1rem] tablet:font-bold  tablet:text-[12rem] mx-auto w-[500px] text-center bg-gradient-to-r from-[#ae59d0] via-[#ed4e4e] to-[#6e6ef7] bg-clip-text text-[transparent] text-stroke text-stroke-[white] ">Saurav Jha</div>
          <div className="flex justify-center">
          <div className=" w-[90%] mx-auto rounded-lg h-auto bg-[#ffffff15] tablet:mt-[1rem] tablet:ml-[2rem] mb-8 py-4 ">
          <p className=" mx-auto h-auto text-[#ffffff50] tablet:w-[95%]">I'm Saurav Jha, a fervent explorer of the digital frontier, deeply immersed in the ever-evolving world of technology. My repertoire spans an array of programming languages, including C++, C, Python, JavaScript, React, HTML, CSS, and SQL. With a knack for touch typing and a typing speed exceeding 80 words per minute, I'm driven by the challenge of harnessing technology to address real-world challenges.</p>
           <div className="flex w-[95%] mt-2 mx-auto justify-between">
             <span className="   text-[#ffffff90] flex gap-2 items-center"><b className="tablet:text-[1.3rem] text-stroke text-stroke-[#ed4e4e] ">Technologies:</b> C,C++,Java,Html,CSS,JavaScript,SQL</span> 
           <span className="   text-[#ffffff90] flex gap-2 items-center"><b className=" tablet:text-[1.3rem] text-stroke text-stroke-[#ed4e4e]">Typing Speed:</b> 80+ WPM</span>
        </div>
            </div>
          </div>

            </div>
            </div>
    </div>
</>
  );
};

export default About;
