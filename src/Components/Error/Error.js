import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oops there is some error </h1>
        <h2>something went wrong</h2>
        <h4>{err.status}:{err.statusText}</h4>
    </div>
  )
}

export default Error


/**
 * *react route component also provides a hook useRouteErro by which we can get exact error and more details of error 
 */