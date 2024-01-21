import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";

const Header=()=>{

    const [loginValue,setLoginValue] = useState("Log in");

    return(
        <div className="header">
          <div className="logo">
                <img src={LOGO_URL}></img>
          </div>
          <div className="navItems">
              <ul>
                  <li>Home</li>
                  <li>Reach Us</li>
                  <li>cart</li>
                  <li onClick={()=>{
                    if(loginValue=== "Log out"){
                        setLoginValue("Log in");
                    }
                    else{
                        setLoginValue("Log out");
                    }
                  }}>{loginValue}</li>
              </ul>
          </div>
        </div>
    )
  }

export default Header;