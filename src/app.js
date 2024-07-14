import React from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import About from "./Components/About/About.js";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import Contact from "./Components/Contact/Contact.js";
import Error from "./Components/Error/Error.js";
import  {Outlet}from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import ResturantMenu from "./Components/ResturantMenu/ResturantMenu.js";
import Hero from "./Components/Hero/Hero.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 
 * *createBrowserRouter and RouterProvider are the two react component to implement routing in react 
 * Todo:read more about react router dom
 * 
 * *we to use header component in all pages 
 * *we will first create children of App component 
 * 
 * //?whenver state variable changes react triggers the reconsilation cycle (rerenders the whole component);
 * 
 * 
 * 
 * *we will not use anchor tag to link the pages which its respective button only use Link to=""   always use link component
 * *import link from react-router-dom 
 * 
 * 
 * 
 */

//?react router dom provides Outlet component which we will use in App after header to and it will call its childeren according to its path
 /* not using key(not acceptable)<<<using index as keys and <<using unique keys(best practice)*/

const App=()=>{
    return(
        <>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

<Header/>
        <Outlet />

        <Footer />
        </>
       
    )
}

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
            children:[
                {
                    path:"/",
                    element:[<Body />]
                    
                },
                {
                    path:"/about",
                    element:[<About />]
                },
                {
                    path:"/CONTACT",
                    element:[<Hero />,<Contact/>]
                },
                {
                    path:"/resturants/:resId",
                    
                    element:<ResturantMenu />
                },
            ],
            errorElement:<Error/>
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);







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

