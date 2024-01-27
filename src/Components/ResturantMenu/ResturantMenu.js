import { RES_API } from "../../Utils/Constants"
import { useState, useEffect } from "react"
import { RES_info } from "../../Utils/Constants"
import "./resturantMenu.css"
import ResturantInfo from "../../Resturantinfo/ResturantInfo"
import SectionCard from "../SectionCard/SectionCard"
const ResturantMenu = () => {
    const [resInfo,setInfo]=useState({});
    const[resMenu, SetMenu]=useState([]);

    useEffect(()=>{
              fetchData();
    },[]);

    const fetchData=async()=>{
        const data = await fetch(
            RES_info
        );
       const json  = await data.json();
      const array = json?.data?.cards[0]?.card?.card?.info;
      // const array2 = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
        
      const newInfo = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

      setInfo(array);
      SetMenu(newInfo);

    }
    
    // const [name,cuisines,areaName,avgRating,isopen,locality,totalRatingString]=json?.data?.cards[0]?.card?.card?.info;
    console.log(resMenu);

  return (
    <>
    <div className='resturants-page'>
     <ResturantInfo resDetail={resInfo}/>
     <div className="divider"></div>
    {
     resMenu.slice(1)?.map((menu,index) => (
            <SectionCard key={index} resdata={menu} />
          ))
        }
    </div>
    </>
  )
}

export default ResturantMenu