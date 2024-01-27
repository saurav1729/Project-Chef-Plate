import { Image_url } from '../../Utils/Constants';
import './menudata.css'
const MenuData = (props) => {
    const{menuData}=props;
    console.log(menuData);
    const{name,imageId,defaultPrice}=menuData?.card?.info;
  return (
    <>
    <div className='menu-data-card'>
      <div>
      <div className='item-name'>{name}</div>
      <div className='item-price'>{defaultPrice/100}</div>
      </div>
      <div className='right'>
      <img className="image" src={Image_url+imageId} alt={name}></img>
      </div>
    </div>
    <div className="divider"></div>
    </>
  )
}

export default MenuData