// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe =() =>{

   const eventOnFocus =()=>{
        console.log('Good!')
    }
    const eventOnBlur =()=>{
        console.log('Hey! Eyes on me!')
    }

  
return <button onFocus={eventOnFocus} onBlur={eventOnBlur}> Button </button>
        
    
}
export default EyesOnMe