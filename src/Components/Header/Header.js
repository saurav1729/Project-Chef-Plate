import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header=()=>{

    const [loginValue,setLoginValue] = useState("Log in");

    return(
        <div className="header">
          <div className="logo">
                <img src={LOGO_URL}></img>
          </div>
          <div className="navItems">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">Reach us</Link></li>
                  <li><Link to="/contact">cart</Link></li>
                  <li onClick={()=>{
                    if(loginValue=== "Log out"){
                        setLoginValue("Log in");
                    }
                    else{
                        setLoginValue("Log out");
                    }
                  }}><Link to="/contact">{loginValue}</Link></li>
              </ul>
          </div>
        </div>
    )
  }

export default Header;