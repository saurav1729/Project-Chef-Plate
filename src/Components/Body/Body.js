// import Cards from "./Cards";
import { Cards } from "../Cards/Cards";
import React, { useState } from "react";
import { useEffect } from "react";
import { RES_API } from "../../Utils/Constants";
// import ResList from "../Utils/mock_data"; "../Utils/mock_data";
import Hero from "../Hero/Hero";
import Shimmer from "../Shimmer/Shimmer";
import "./body.css";
import { Link } from "react-router-dom";


const Body = () => {
  const [resList, setResList] = useState([]);
  const [buttonName, setNewName] = useState("Top rated resturants");
  const [defaultList, setDefaultList] = useState([]);
  const [searchText, setText] = useState("");
  const [btnclass, setBtnclass] = useState("fa-magnifying-glass");



  //?whenver state variable changes react triggers the reconsilation cycle (rerenders the whole component);

  console.log("Body rendered");

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
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // con  sole.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.id);
    //  const array1 =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //  const newArray=array.concat(array1);
    setResList(array);
    console.log(resList)
    setDefaultList(array);
  };

  //*function for fetching the shimmer component

  const fetchshimmer = () => {
    if (defaultList.length === 0) {
      return <Shimmer />;
    }
    return null;
  };

  /* not using key(not acceptable)<<<using index as keys and <<using unique keys(best practice)*/

  return (
    <div className="body">
      <Hero />

      <div className="filter-container">
        <div className="flt-text">
          <h1>Satisfy Your Cravings</h1>
        </div>
        <button
          className="filter-btn"
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
        </button>
      </div>

      <div className="search-container">
        <div className="search-box">
          <input
            type="search"
            placeholder="search for best resturants out there"
            value={searchText}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <i
          
            className={btnclass + " " + "fa-solid" + " " + "search-btn"}
            onClick={() => {
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
              }
            
            }}

          ></i>
        </div>
      </div>

      {fetchshimmer()}

      <div className="res-container">
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
