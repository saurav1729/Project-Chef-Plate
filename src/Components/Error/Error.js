import React from 'react'
import { useRouteError } from 'react-router-dom'
import { error_img } from '../../Utils/Constants';
import './Error.css'
const Error = () => {
    const err = useRouteError();
    (err);
  return (<>
    <div className='error-section'> 
      <div className='errImg_container'>
        <img src={error_img}></img>
      </div>
      <div className='err_section'>
      <h1><p>Oops</p> there is some error </h1>
        <h2>something went wrong</h2>

        <h4>{err.status}:{err.statusText}</h4>
      </div>
   
    </div>
    </>
  )
}

export default Error


/**
 * *react route component also provides a hook useRouteErro by which we can get exact error and more details of error 
 */