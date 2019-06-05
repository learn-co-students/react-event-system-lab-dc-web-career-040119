// Code Keypad Component Here
import React from 'react'


const Keypad =()=>{

    const enterPassword=()=>{
        return console.log('Entering password...')
    }

        return <input onKeyUp={enterPassword} type="password" />
        


}
export default Keypad