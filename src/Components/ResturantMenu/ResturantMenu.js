import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RES_info } from "../../Utils/Constants";
import ResturantInfo from "../Resturantinfo/ResturantInfo";
import SectionCard from "../SectionCard/SectionCard";
import MenuData from "../MenuData/MenuData";
import './resturantMenu.css';
import axios from 'axios';
import Shimmer from '../Shimmer/Shimmer';
import { useRef } from 'react';

const ResturantMenu = () => {
  const [resInfo, setInfo] = useState({});
  const [resMenu, setMenu] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);
  const [selectedSectionTitle, setTitle] = useState();
  const { resId } = useParams();
  const [loading, setLoading] = useState(true);
  const menuContaineref=useRef();

  useEffect(() => {
    fetchData();
  }, [resId]);


  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(RES_info + resId);
  //     const json = await response.json();

  //     const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
  //     const menuInfo = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //     setInfo(restaurantInfo);
  //     setMenu(menuInfo);
      
  //     // Set default selected section to "Recommended" if it exists
  //     const recommendedSection = menuInfo?.find(section => section?.card?.card?.title === "Recommended");
  //     if (recommendedSection) {
  //       setSelectedSection(recommendedSection?.card?.card?.itemCards || []);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching restaurant data:", error);
  //   }
  // };


  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get('https://chefsplate-server.onrender.com/api/menu',{params:{resId:resId}});
    
      const json = response.data;
      const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
          const menuInfo = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
          setInfo(restaurantInfo);
          setMenu(menuInfo);
          
      //     // Set default selected section to "Recommended" if it exists
      const firstSection = menuInfo?.find(section => (
        section?.card?.card?.itemCards?.length > 0
      ));
      
      console.log(menuInfo);
      console.log(firstSection);
      
      if (firstSection) {
        setSelectedSection(firstSection.card.card.itemCards || []);
        setTitle(firstSection.card.card.title)
      }
          setLoading(false);
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      };
    

  const handleSectionClick = (section) => {
    setSelectedSection(section?.card?.card?.itemCards || []);
    setTitle(section?.card?.card?.title);
  };

  useEffect(()=>{
    if (menuContaineref.current) {
      menuContaineref.current.scrollTo(0,0);
    }
  },[selectedSection])

  return (
    <div className='resturants-page'>

{loading ? (
      <Shimmer count={5} height="500px" width="500px" />
    ) :<>
      <ResturantInfo resDetail={resInfo} />
      <div className="w-full h-auto flex flex-row mb-6 ">
        {/* <Scrollbar> */}
        
        <div className="w-4/12 h-[30rem] overflow-y-scroll scrollL">
          {resMenu?.map((menu, index) => (
            <SectionCard key={index} resdata={menu} onClick={() => handleSectionClick(menu)} />
          ))}
        </div>
        {/* </Scrollbar> */}
        <div ref={menuContaineref} className="w-8/12 h-[30rem] overflow-y-scroll scrollL">
          <span className='text-[1.2rem] ml-4 font-[500]'>{selectedSectionTitle}</span>
          {selectedSection && selectedSection.map((menu, index) => (
            <MenuData key={index} menuData={menu} />
          ))}
        </div>
      </div>
    </>
}
    </div>
  );
};

export default ResturantMenu;
