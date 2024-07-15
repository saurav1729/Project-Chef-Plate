import { useState } from "react";
import { Image_url } from "../../Utils/Constants";
// import './cards.css'

export const Cards=(props)=>{
    /* we can also destructue it 
    by const {resName,cousine}=pro */

    const {resdata}=props;
    const{cuisines,avgRating,cloudinaryImageId,locality
    }=resdata?.info;

    // const{slaString}=resdata.info?.sla;
    // console.log(resdata);
    return(
        
        <div className="res-cards border-[0.1rem] border-[#e9e9e9] rounded-lg shadow-sm shadow-[#27222220] mobile:shadow-none   h-[100px] w-[360px]  pb-[0.8rem] p-[8px] overflow-hidden hover:rescard-hover  mobile:w-[220px]  mobile:rounded-[1.5rem] mobile:h-[290px]">
               <div className="flex gap-6 mobile:gap-0 mobile:flex-col">
                 <div className="res-image mobile:w-full mobile:h-[175px] h-[75px] w-[75px]">
                    <img className=" w-full h-full mobile:rounded-[1.5rem] rounded-xl" src={Image_url+cloudinaryImageId} alt=""></img>
                 </div>
                 <div className="flex flex-col ">
                 <div className="res-name  font-[PT Sans] text-[14px] mt-[10px] font-semibold ">{resdata.info.name}</div>
                 <div className="cousines truncate text-[#7e808c] text-wrap text-[10px] text-ellipsis font-sans line-clamp-2">{cuisines.join(',')}</div>
                 <div className="rest-component  w-[220px] mobile:w-auto flex text-[12px] justify-between mt-1 text-ellipsis font-[Gowun_Batang] line-clamp-1">
                    <div className="Location">{locality}</div>
                     <div>⭐{avgRating}</div>
                 </div> 
                 </div>
                </div>
               </div>
               
    )
}

// export default Cards;

