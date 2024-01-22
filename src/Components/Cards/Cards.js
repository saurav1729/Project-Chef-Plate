import { useState } from "react";
import { Image_url } from "../../Utils/Constants";
import './cards.css'

export const Cards=(props)=>{
    /* we can also destructue it 
    by const {resName,cousine}=pro */

    const {resdata}=props;
    const{cuisines,avgRating,cloudinaryImageId,locality
    }=resdata?.info;

    // const{slaString}=resdata.info?.sla;
    console.log(resdata);
    return(
        
        <div className="res-cards">
                 <div className="res-image">
                    <img className="image" src={Image_url+cloudinaryImageId} alt=""></img>
                 </div>
                 <div className="res-name">{resdata.info.name}</div>
                 <div className="cousines">{cuisines.join(',')}</div>
                 <div className="rest-component">
                    <div className="Location">{locality+','+'Madhubani'}</div>
                     <div>⭐{avgRating}</div>
                 </div>
                
               </div>
               
    )
}

// export default Cards;

