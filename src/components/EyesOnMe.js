import React, {Component} from 'react'

class EyesOnMe extends Component{
  good(){
    console.log('Good!');
  }

  bad(){
    console.log('Hey! Eyes on me!');
  }
  
  render(){
    return(
      <button onBlur={this.bad} onFocus={this.good} ></button>
    )
  }
}

export default EyesOnMe;
