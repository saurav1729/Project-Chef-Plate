import { About_bg } from "../../Utils/images";

const About = () => {
  return (
  
    <div className="tablet:w-[100%] h-auto  mt-[80px] tablet:mt-0 tablet:h-auto tablet:relative bg-gradient-to-r from-gray-dark  to-[#212020] tablet:bg-none  tablet:min-height tablet:-mb-[21rem] max-w-[1512px] mx-auto" >
    
        <img className=" tablet:h-full tablet:w-full  " src={About_bg}></img>

      <div className=" tablet:w-[100%]  tablet:min-height">
        <h1 className="tablet:absolute tablet:left-[30rem] tablet:top-9 tablet:text-[2rem] tablet:font-sans tablet:font-bold tablet:bg-gradient-to-bl tablet:from-[black] tablet:via-[#fc942b] tablet:to-[Orange] tablet:bg-clip-text tablet:text-[transparent] tablet:text-stroke tablet:text-stroke-indigo-200 tablet:text-stroke-fill-indigo-600">
          About This Project(Chefs Plate)
        </h1>
        <div className="tablet:absolute tablet:top-[7rem] tablet:w-[60rem] tablet:left-[18rem]">
          <p className="tablet:text-[1.3rem] text-[#ffffff50]">
            {" "}
            <b className="bg-gradient-to-r from-orange via-[#d66363] to-[#34a4f4] bg-clip-text text-[transparent]">
              "Chefs Plate"
            </b>{" "}
            is a React-based web application created for practice and
            demonstration. The project features a{" "}
            <u className="text-[#e46c6c]">
              configuration-driven user interface
            </u>{" "}
            and integrates{" "}
            <u className="bg-gradient-to-r from-orange to-[#d66363] bg-clip-text text-[transparent]">
              the Swiggy API
            </u>{" "}
            to fetch restaurant and menu data. Serving as a demo website for a
            food delivery service, it showcases essential functionalities like a{" "}
            <b className="bg-gradient-to-r from-orange to-[#d66363] bg-clip-text text-[transparent]">
              configurable UI, search feature, and contact forms, all in a
              single-page application format.
            </b>
          </p>
        </div>
        <div className="Features tablet:absolute  tablet:top-[26rem] tablet:left-[1rem]">
          <h3 className=" tablet:ml-5  bg-gradient-to-r from-orange via-[#d66363] to-[#34a4f4] bg-clip-text text-[transparent] font-bold tablet:text-[1.8rem]">Key Features</h3>
          <ul className="tablet:mt-[2rem] tablet:w-[19rem] tablet:text-[1.3rem] text-[#ffffff70]">
            <li>📌 Shimmer UI </li>
            <li>📌 Search Functionality</li>
            <li>📌 Seamless Contact Forms</li>
            <li className="">📌 Single Page Application</li>
          </ul>
        </div>
        <div className="Features tablet:absolute  tablet:top-[26rem] tablet:right-0">
          <h3 className="tablet:ml-[2rem] tablet:mt-5 bg-gradient-to-r from-orange via-[#d66363]  bg-clip-text text-[transparent] font-bold tablet:text-[1.8rem]">Technologies Used</h3>
          <ul className="tablet:mt-[2rem] tablet:w-[19rem] tablet:text-[1.3rem] text-[#ffffff70]">
            <li>📌 React</li>
            <li>📌 Html,Css,Javascript</li>
            <li>📌 Tailwind,css</li>
           
          </ul>
        </div>
        <div className="tablet:absolute tablet:top-[30rem] tablet:text-[1.3rem]  font-semibold tablet:left-[38rem]">
              <h2 className=" tablet:p-2 rounded-lg shadow-sm tablet:shadow-gray tablet:bg-gradient-to-bl tablet:from-[black] tablet:via-[#fc942b] tablet:to-[Orange] bg-clip-text text-[transparent] text-stroke text-stroke-indigo-200 text-stroke-fill-indigo-600">Notice(Limited Menu Display)</h2>
         </div>
         <p className="tablet:absolute  tablet:p-3 tablet:shadow-sm tablet:rounded-md tablet:shadow-blue tablet:top-[36rem] tablet:w-[37rem] tablet:left-[30rem] text-pretty tablet:text-[1.34rem] text-[#ffffff90]">If you encounter shimmering UI instead of menus when clicking on restaurants, it's likely due to a CORS (Cross-Origin Resource Sharing) issue. To ensure uninterrupted access to our delectable offerings, we recommend using a VPN like Proton VPN.</p>

        <h2 className="tablet:absolute tablet:top-[55rem] tablet:left-[39rem] text-stroke tablet:p-2 shadow-sm shadow-gray-light rounded-2xl text-stroke-blue font-bold tablet:text-[3rem] ">Author:</h2>
     

        <div className="name tablet:absolute tablet:top-[60rem] tablet:left-[26rem] tablet:font-bold  tablet:text-[8rem] bg-gradient-to-r from-[#ae59d0] via-[#ed4e4e] to-[#6e6ef7] bg-clip-text text-[transparent] text-stroke text-stroke-[white] ">Saurav Jha</div>
          
          <div className="tablet:absolute tablet:w-[94%] rounded-2xl tablet:h-[9rem] bg-[#ffffff15] tablet:top-[85rem] tablet:left-[2rem]"></div>

          <p className="tablet:absolute tablet:top-[86rem] tablet:left-[4rem] text-[#ffffff50] tablet:w-[90%]">I'm Saurav Jha, a fervent explorer of the digital frontier, deeply immersed in the ever-evolving world of technology. My repertoire spans an array of programming languages, including C++, C, Python, JavaScript, React, HTML, CSS, and SQL. With a knack for touch typing and a typing speed exceeding 80 words per minute, I'm driven by the challenge of harnessing technology to address real-world challenges.</p>
           <span className="tablet:absolute tablet:top-[91rem] tablet:left-[4rem] text-[#ffffff90] "><b className="tablet:text-[1.3rem] text-stroke text-stroke-[#ed4e4e] ">Technologies:</b> C,C++,Java,Html,CSS,JavaScript,SQL</span> 
           <span className="tablet:absolute tablet:top-[91rem] tablet:left-[33rem] text-[#ffffff90]"><b className=" tablet:text-[1.3rem] text-stroke text-stroke-[#ed4e4e]">Typing Speed:</b> 80+ WPM</span>
      </div>
    </div>

  );
};

export default About;
