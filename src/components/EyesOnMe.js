// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{

    eventOnFocus =()=>{
        console.log('Good!')
    }
    eventOnBlur =()=>{
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(

            <button onFocus={this.eventOnFocus} onBlur={this.eventOnBlur}> Button </button>
        )
    }
}