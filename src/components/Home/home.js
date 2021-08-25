
import React, { Component } from 'react';
import './home.css';
import { Button, Form, FormGroup, FormControl, InputGroup, Image } from 'react-bootstrap';
class Home extends Component {


backAction=()=>{
  this.props.backAction();
}
    
    
    render(){
        //inline style
        const style = {
            backgroundColor: 'yellow',
            border: '1px solid blue',
            position: 'relative',
            border: '2px solid #cdcdcd',
            borderColor: 'rgba(0,0,0,.14)',
            backgroundColor: 'AliceBlue',
            fontSize: '14px',
            height:'25px',
            marginTop:'10px',

        };

     return (
        <div className="homeBody">
          <Button id="backButton" className="backButton" onClick={this.backAction}>BACK</Button>
          <div className="container">
          Welcome Home!!!!! <p className='first-name-class'>{this.props.firstName}</p><br/>
        </div>
      </div>
    );
    }
}
export default Home