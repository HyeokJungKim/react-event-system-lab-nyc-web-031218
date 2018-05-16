import React, {Component} from 'react'

class Keypad extends Component{

  typing(){
    console.log('Entering password...');
  }
  
  render(){
    return(
      <input onKeyUp={this.typing} type="password" />
    )
  }
}

export default Keypad;
