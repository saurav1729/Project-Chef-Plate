import { hero_image } from "../../Utils/Constants";
import './Hero.css'


const  Hero=()=> {
    return (
        <div className="hero">
            <div className="text-container">
                <div className="welcome-text">Welcome To Chefs Plate<span>🍽️</span></div>
            <p className="secondary-text"> get Your Favourite Food Delivered to Your in minutes</p>
            <h4 className="tertiary-text">Explore.. Best resturants around You</h4>

            </div>
            <div className="image-container">
                   <img src={hero_image}></img>
            </div>
        </div>
    );
}


export default Hero;