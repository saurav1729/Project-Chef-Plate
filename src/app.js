import React from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Shimmer from "./Components/Shimmer/Shimmer.js";

//try

const App=()=>{
    return(
        <>
        <Header />
        <Body />
        </>
       
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);







/**
 * =header
 *   -logo
 *   -navlist
 *      +home
 *      +contact us
 *       +cart
 *       +login button
 * =Body
 *    -search
 *    -resturant container
 *      +resturant card
 *         #image
 *         #res name
 *         #cuisine
*          #rating
 * =footer
 *      -address
 *      -links
 *      -copyright
 *      -contac us
 * 
 * 
 */

// const Heading=()=>(
//     <div className="container">
//         <h1>wish me Luck I am making this website</h1>
//     </div>
// )

