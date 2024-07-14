import { useState ,useEffect} from 'react';
import { Image_url } from '../../Utils/Constants';
import './Menudata.css';

const MenuData = (props) => {
  const { menuData } = props;
  const [counter, setCounter] = useState(0);


  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const { name = "", imageId = "", defaultPrice = 0, description = "", ratings = {}, price = 0 } = menuData?.card?.info || {};
  const { rating = "3.4", ratingCount = 0 } = ratings?.aggregatedRating || {};

  return (
    <>
      <div className='menu-data-card'>
        <div className='left'>
          <div className='item-name'>{name}</div>
          <div className='item-price'><i className="fa-solid fa-indian-rupee-sign"></i>{defaultPrice / 100 || price / 100}</div>
          <p className='item-desc'>{description}</p>
          <span>
            <i className="fa-solid text-[0.9rem] fa-star newrating">
              {rating}
            </i>
          </span>
        </div>
        <div>
          <img className="M_img mt-[20px]" src={Image_url + imageId} alt={name} />
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
  );
}

export default MenuData;
