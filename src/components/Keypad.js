// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
  indicateTyping = () => console.log('Entering password...')
  render () {
    return (
      <input type="password" onKeyUp={this.indicateTyping}/>
    )
  }
}

export default Keypad
