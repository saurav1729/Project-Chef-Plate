// import './Sectioncards.css';
import MenuData from '../MenuData/MenuData';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const SectionCard = (props) => {
  const { resdata } = props;
  // (resdata);
  
  // Extract itemCards and get its length
  const itemCards = resdata?.card?.card?.itemCards;

  const length = itemCards ? itemCards.length : 0;
  console.log(resdata);

  if (!itemCards || length === 0) {
    return null; // Return null if itemCards is undefined or has length 0
  }



  return (
    <>
    <details open className="detail">
      <summary><div className="cards">
         <h3>{resdata?.card?.card?.title} ({length})</h3>
         <IoIosArrowDropdownCircle />
      </div></summary>
   
      <div className='menudata'>
      {
     itemCards?.map((menu,index) => (
            <MenuData key={index} menuData={menu} />
          ))
        }
      </div>
      </details>
    </>
  ); 
};

export default SectionCard;
