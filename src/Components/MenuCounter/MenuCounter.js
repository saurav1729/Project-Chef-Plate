
import { useState } from 'react';

const MenuCounter = () => {
      
     
     
      return (
        <>
          <div>
          <button style="background-color:grey;" onClick={addValue}>add value</button>
          <h2>Counter value:{counter}</h2>
          <button style="background-color:grey" onClick={removeValue}>remove Value</button>
          </div>
        </>
      )
    }
    



export default MenuCounter