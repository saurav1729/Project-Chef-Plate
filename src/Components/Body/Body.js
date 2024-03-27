// import Cards from "./Cards";
import { Cards } from "../Cards/Cards";
import React, { useState } from "react";
import { useEffect } from "react";
import { RES_API } from "../../Utils/Constants";
// import ResList from "../Utils/mock_data"; "../Utils/mock_data";
import Hero from "../Hero/Hero";
import Shimmer from "../Shimmer/Shimmer";
// import "./body.css";
import { Link } from "react-router-dom";
import FoodList from "../FoodList/FoodList";
// import '../FoodList/FoodList.css'
import { Image_url } from '../../Utils/Constants';
import { Cities } from "../../Utils/Cities";
import resmockdata from "../../Utils/ResMockData";


const Body = () => {
  const [resList, setResList] = useState(resmockdata);
  const [buttonName, setNewName] = useState("Top rated resturants");
  const [defaultList, setDefaultList] = useState(resmockdata);
  const [searchText, setText] = useState("");
  const [btnclass, setBtnclass] = useState("fa-magnifying-glass");
  const [foodItems, setfoodItems]=useState([]);
  
  //set longitude and latitude for the api
  const[latitude,setLatitude]=useState();
  const[longitude,setLongitude]=useState();

  //  console.log(Cities);
  //?whenver state variable changes react triggers the reconsilation cycle (rerenders the whole component);

  // console.log("Body rendered");

  //*use of useeffect to fetch the Api data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    const array =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
   const foodData =json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
  
 const indices=[2,3,4,6,7,8,11,17];
  const newFooditem = indices.map((index)=>(foodData[index]));
   setfoodItems(foodData);
  //  console.log(newFooditem)

    setResList(array);
    console.log(array);

    setDefaultList(array);
  };


  // console.log(resList);

  //*function for fetching the shimmer component

  const fetchshimmer = () => {
    if (defaultList.length === 0) {
      return <Shimmer />;
    }
    return null;
  };

  /* not using key(not acceptable)<<<using index as keys and <<using unique keys(best practice)*/

  return (
    <div className="">
      <Hero />

      {/* Filter Container */}

      <div className=" justify-between  tablet:w-95%  w-11/12 mx-auto   mt-[2rem] h-auto p-3 tablet:my-[20px] tablet:mx-[39px] flex rounded-[12px] tablet:mt-[120px] items-center  filter-Container-shadow hover:filter-Container-hover">
        <div className="flt-text tablet:my-[2px] tablet:mx-[20px] tablet:text-[5rem] text-[2rem] font-bold capitalie tablet:space-x-2 bg-gradient-to-r from-[#ae59d0] via-[#ed4e4e] to-[#6e6ef7] bg-clip-text text-[transparent] font-[Inter] ">
          <h1>Satisfy Your Cravings</h1>
        </div>
        <Link hrefLang="#res-container"><button
          className="filter-btn  tablet:py-[10px] tablet:px-[20px] tablet:mx-[20px] text-[16px] text-center rounded-[8px] text-[#ffffff] bg-gradient-to-r from-[#ae59d0] to-purple border-[2px]  border-[#3498db]"
          onClick={() => {
            let filteredList = resList.filter(
              (resList) => resList.info.avgRating > 4.0
            );

            let NewButtonName = "See All Resturants";
            if (buttonName === "Top rated resturants") {
              setNewName(NewButtonName);
              setResList(filteredList);
            } else {
              NewButtonName = "Top rated resturants";
              setNewName(NewButtonName);
              setResList(defaultList);
            }
          }}
        >
          {buttonName}
        </button></Link>
      </div>
       

      <div className="image_list flex gap-3 my-[20px] mx-[60px] overflow-x-scroll no-scroll mobile:w-[90% ] w-11/12 mx-auto snap-x snap-mandatory ">
      
     { foodItems.slice().map((food) => (
            // <FoodList key={food?.id} fooddata={food} />
            // <div className='food_card'>
            <img className="mobile:h-[164px]  h-[100px] w-[100px] mobile:w-[auto] object-contain mobile:object-cover cursor-pointer snap-center" src={Image_url+food?.imageId}   onClick={() => {
              // if(food?.action.text===""){
              //   setBtnclass("fa-magnifying-glass");
              // }
              // else{
              // if (btnclass === "fa-magnifying-glass") {
              //   if (searchText.length === 0) {
              //     setResList(defaultList);
              //   } else {

                 console.log(food?.action?.text);
                  const filteredRestaurants = defaultList.filter((res) => {
                    const nameMatch = res?.info?.name
                      .toLowerCase()
                      .includes(food?.action?.text.toLowerCase());

                      const cuisinesMatch = res?.info?.cuisines?.join(',').toLowerCase().includes(food?.action?.text.toLowerCase());
                      console.log(res?.info?.cuisines?.join(',').toLowerCase());
                      console.log(food?.action?.text.toLowerCase());
                      
                      const match = nameMatch||cuisinesMatch;
                      return match;

                  
                  });
            
                    setText(food?.action?.text);
                
                  setResList(filteredRestaurants);
                  console.log(searchText);
                  setBtnclass("fa-xmark");

                  window.scrollTo(0,500);
            }}></img>
        // </div>
          ))
     }

      </div>

      

      <div className="search-container justify-center w-90% h-[40px] my-[50px] mx-5% flex items-center sticky -6 top-4">
        <div className="search-box bg-[#fff] rounded-[20px] mobile:w-4/12 p-[10px] shadow-[#d688d0] shadow-[0_2px_8px] flex justify-between relative">
          <input
          className="bg-[#0000] mt-1 w-9/12 h-[20px]  text-[18px] ms-[9px] text-ellipsis text-left focus:outline-none placeholder:text-[#bd7979] "
            type="search"
            placeholder="search for best resturants out there"
            value={searchText}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { 
              if (true) { 
                if (searchText.length === 0) {
                  setResList(defaultList);
                }
                else{
                  const filteredRestaurants = defaultList.filter((res) => {
                    const nameMatch = res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                    return nameMatch;
                  });
  
                  setResList(filteredRestaurants);
                  setBtnclass("fa-xmark");
                  
                } 
              }
            }
              } 
                
          
          ></input>
          <div className="w-[40px] h-[42px] top-[1] pr-2 absolute right-0 p-[10px]  border-r-gray  rounded-[0px_20px_20px_0]" style={{ boxShadow: "-1px 0px 3px #94bbe9"}}>
          <i
          
            className={btnclass + " " + "fa-solid" + " " + "mr-[5px] cursor-pointer text-[20px]  hover:scale-110"}
            onClick={() => {
              if(searchText===""){
                setBtnclass("fa-magnifying-glass");
              }
              else{
              if (btnclass === "fa-magnifying-glass") {
                if (searchText.length === 0) {
                  setResList(defaultList);
                } else {
                  const filteredRestaurants = defaultList.filter((res) => {
                    const nameMatch = res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                    return nameMatch;
                  });
  
                  setResList(filteredRestaurants);
                  console.log(searchText);
                }
                setBtnclass("fa-xmark");
              } else {
                setResList(defaultList);
                setBtnclass("fa-magnifying-glass");
                setText("");
              }
            }}}
          ></i>
          </div>
        </div>
      </div>


      {fetchshimmer()}

      <div className="res-container  flex flex-wrap gap-4 mobile:gap-2 mb-3  justify-center " id="res-container">
        {resList.length === 0 && defaultList.length!=0? (
          <div>No result fount for {searchText}</div>
        ) : (
          resList.map((resturant) => (
            <Link   key={resturant?.info?.id}  to={"/resturants/"+ resturant?.info?.id}><Cards resdata={resturant} /></Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
