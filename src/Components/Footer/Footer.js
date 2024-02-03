import React from 'react'
import './footer.css'
import { logo ,gif} from '../../Utils/Constants'


const Footer = () => {
  return (<>
   <footer className='footer'>
      <img className='footer-logo' src={logo}></img>
      {/* <div className='footer-gif'>
      <img src={gif}></img>
      </div> */}

   </footer>
    </>
  )
}

export default Footer