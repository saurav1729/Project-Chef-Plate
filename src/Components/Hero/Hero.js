import { hero_image } from "../../Utils/Constants";
import './Hero.css'


const  Hero=()=> {
    return (
        <div className="hero">
            <div className="text-container">
                <div className="welcome-text">Welcome To Chefs Plate<span>🍽️</span></div>
                <div className="hero-style-container">
                    <div className="inside-box">
                    <div className="order-image"></div>
                    <h4>Order</h4>
                    </div>
                    <div className="inside-box">
                    <div className="deliver-image"></div>
                    <h4>deliver</h4>
                    </div>
                    <div className="inside-box">
                    <div className="eat-image"></div>
                    <h4>Eat</h4>
                    </div>
                </div>
            </div>
            <div className="image-container">
                   <img src={hero_image}></img>
            </div>
        </div>
    );
}


export default Hero;