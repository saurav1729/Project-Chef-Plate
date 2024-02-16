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
        
        <div className="res-cards border-[0.1rem] border-[#e9e9e9] rounded-[1.5rem] w-[220px] h-[290px] pb-[0.8rem] p-[8px] overflow-hidden hover:rescard-hover ">
                 <div className="res-image w-full h-[175px]">
                    <img className=" w-full h-full rounded-[1.5rem]" src={Image_url+cloudinaryImageId} alt=""></img>
                 </div>
                 <div className="res-name  font-[PT Sans] text-[14px] mt-[10px] font-semibold ">{resdata.info.name}</div>
                 <div className="cousines truncate text-[#7e808c] text-wrap text-[10px] text-ellipsis font-sans line-clamp-2">{cuisines.join(',')}</div>
                 <div className="rest-component  flex text-[12px] justify-between mt-1 text-ellipsis font-[Gowun_Batang] line-clamp-1">
                    <div className="Location">{locality}</div>
                     <div>⭐{avgRating}</div>
                 </div>
                
               </div>
               
    )
}

// export default Cards;

