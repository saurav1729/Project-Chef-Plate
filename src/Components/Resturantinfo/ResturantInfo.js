import React, { useState } from 'react'
import './resturantinfo.css'
import { Image_url } from '../../Utils/Constants';

const ResturantInfo = (props) => {


  const {resDetail}= props;
  const {name, logo,avgRatingString,totalRatingsString,cuisines,locality,areaName}=resDetail;
    // (resDetail);
    // (totalRatingsString);
    
  

  return (
    <>
  
    <div className='restinfo-card w-[60%] h-[200px] shadow-lg shadow-[#00000005] '>
    <h2 className='name'>{name}</h2>
       <div className='primary-container'>
       <div className='left'>
       <div className="info">{cuisines?.join(',')}</div>
       <div className='info'>{locality},{areaName}</div>
       <div className='info'>{open}</div>
       <i className="fa-solid fa-bicycle deliverytime"></i>
       <div className='deliverytime'>{resDetail?.sla?.lastMileTravelString}</div>
       <div className='costforTwo'>{resDetail?.costForTwoMessage}</div>
       </div>
  
       <div className='right'>
       <img className="image" src={Image_url+logo} alt={name}></img>
       <div className='resturant-rating'>
       <i className="fa-solid fa-star rating">
        {avgRatingString}
       </i>
       <div className='total-string'>{totalRatingsString}</div>
       </div>
       </div>
       </div>
      
    </div>
    
    </>
    
  )
}

export default ResturantInfo