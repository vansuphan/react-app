import React , { Component } from 'react'; 
import './test.css';
class Test extends Component {
  render(){
    const {value} = this.props;
    let className = 'di-choi';
    if(value.dichoixong){
      className += ' dichoixong';
    }
      return(
        <div className={className}>
            <ul>
                <li>{this.props.value.title} {this.props.name}</li>
            </ul>
        </div>
      );
  };
    
}
export default Test;
    
