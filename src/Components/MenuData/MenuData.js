import { useState } from 'react';
import { Image_url } from '../../Utils/Constants';
import './Menudata.css'
const MenuData = (props) => {
    const[img ,setimg]=useState("");
    const{menuData}=props;
     console.log(menuData);
     let[counter,setcounter]=useState(0);


     
     const addValue=()=>{
      
       if(counter<20){
         counter=counter+1;
       setcounter(counter);
       }
     }
   
   
     const removeValue=()=>{
       if(counter>0){
       setcounter(counter-1);
       }
     }

  
    const{name,imageId,defaultPrice,description,ratings,price}=menuData?.card?.info;

    const{rating,ratingCount}=ratings?.aggregatedRating;
    // console.log(rating);

    const newRating = rating||"3.4"
    const desc=description||""
  return (
    <>
    <div className='menu-data-card'>
      <div className='left'>
     
      <div className='item-name'>{name}</div>
      <div className='item-price'><i class="fa-solid fa-indian-rupee-sign"></i>{defaultPrice/100||price/100}</div>
      <p className='item-desc'>{desc}</p>
      <span>
      <i className="fa-solid fa-star newrating">
        {newRating}
       </i>
      </span>
      </div>
      <div>
      <img className="M_img mt-[20px]"src={Image_url+imageId}></img>
       <div className='MenuCounter'>
        <span>
        <i className="fa-solid fa-minus minus" onClick={removeValue}></i>
        <p className='counter'>{counter}</p>
        <i className="fa-solid fa-plus plus" onClick={addValue}></i>
        </span>
       </div>
      </div>
     

    </div>
    <div className="divider"></div>
    </>
  )
}

export default MenuData