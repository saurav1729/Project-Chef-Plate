// import Cards from "./Cards";
import { Cards } from "../Cards/Cards";
import React, { useState } from "react";
import { useEffect } from "react";
import { RES_API } from "../../Utils/Constants";
// import ResList from "../Utils/mock_data"; "../Utils/mock_data";
import Hero from "../Hero/Hero";
import Shimmer from "../Shimmer/Shimmer";
import './body.css'





const Body = () => {

  const [resList,setResList]=useState([]);
  const [buttonName,setNewName]=useState("Top rated resturants")
 const [defaultList,setDefaultList]=useState();
  
       useEffect(()=>{
        fetchData();
       },[]);

       const fetchData=async()=>{
           const data =await fetch(
            RES_API
           );
           const json= await data.json();
           const array =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.id);
          //  const array1 =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          //  const newArray=array.concat(array1);
           setResList(array);
           setDefaultList(array);
    
          
       };
      const fetchshimmer=()=>{
       if(resList.length===0){
        return(
             <Shimmer />
        );
       }
      }
    
    
    
  

  /* not using key(not acceptable)<<<using index as keys and <<using unique keys(best practice)*/

  return (
    <div className="body">
            <Hero />
           
   
      <div className="Search-container">
      {/* <div className="bike-anm"> */}
        {/* <div className="left-gif"> */}
        {/* <img src="https://www.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-600nw-1145000942.jpg"></img> */}
        {/* </div> */}
        {/* <div className="right-gif"></div> */}
      {/* </div> */}
        <input
          type="search"
          placeholder="search for best resturants out there"
        ></input>
        <button type="submit">search</button>
      </div>

      <button className="filter-btn" onClick={()=>{

       let filteredList=resList.filter((resList)=>resList.info.avgRating>4.0);
        
       let NewButtonName="See All Resturants";
       if(buttonName==="Top rated resturants"){
        setNewName(NewButtonName);
        setResList(filteredList);
       }
       else{
        NewButtonName="Top rated resturants";
        setNewName(NewButtonName);
        setResList(defaultList);
       }
      }}>{buttonName}</button>

      {/* //this will call funtion to return shimmer efeect; */}

       {fetchshimmer()}
      
      <div className="res-container">
        {resList.map((resturant) => (
          <Cards key={resturant?.info?.id} resdata={resturant} />
        ))}
      </div>
    </div> 
  );
};

export default Body;
