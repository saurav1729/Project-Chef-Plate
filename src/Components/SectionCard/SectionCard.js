import './Sectioncards.css'
import MenuData from '../MenuData/MenuData';

const SectionCard = (props) => {
  const { resdata } = props;
  console.log(resdata);
  
  // Extract itemCards and get its length
  const itemCards = resdata?.card?.card?.itemCards;
  console.log(itemCards);
  const length = itemCards ? itemCards.length : 0;

  return (
    <>
      <div className="cards">
          {resdata?.card?.card?.title} ({length})
      </div>
      <div className='menudata'>
      {
     itemCards?.map((menu,index) => (
            <MenuData key={index} menuData={menu} />
          ))
        }
      </div>
      </>
  ); 
}

export default SectionCard;
