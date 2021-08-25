import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Login from '../../components/Login/login';
import{connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';
// import { push } from 'react-router-redux'; 


 const style = {
            backgroundColor: 'yellow',
            border: '1px solid blue',
            // position: 'relative',
            border: '2px solid #cdcdcd',
            borderColor: 'rgba(0,0,0,.14)',
            backgroundColor: 'AliceBlue',
            fontSize: '14px',
            height:'25px',
            marginTop:'10px',

        };

export class LoginPage extends Component { 
    state = {
    loginFailed:false,
    serviceFailed:false
  }

    componentWillReceiveProps(newProps) {
           if (newProps.ctr.loginFailed) {
                 this.setState({ loginFailed: true });
            }
             if (newProps.ctr.serviceFailed) {
                 this.setState({ serviceFailed: true });
                }
        
       }

        loginAction = (username,password) => {
            console.log("username",username);
        this.props.OnLogin(username,password);        ;
    }

       backAction = () => {
           this.props.OnLogOut(); 
           this.props.history.push('/home');
       }

    render(){
        return(
        <div><Login login={this.loginAction} back={this.backAction } loginFailed={this.state.loginFailed}serviceFailed={this.state.serviceFailed}/>
        <br/>
        <div className = {style}>{this.props.ctr.loginStatus}</div></div>
        );
    }


}

const mapStateToProps = state=>{
    return{
       ctr:state //reffered as this.props.ctr
    };
}

const mapDispatchToProps= dispatch =>{


    return{
        OnLogin:(username,password)=>{ dispatch(actions.auth(username,password));
                    //   dispatch(push('/'));
                    } ,
        OnLogOut:()=> dispatch({type:actionTypes.LOGOUT}),
    }

}
export default (connect(mapStateToProps,mapDispatchToProps)(LoginPage));
// export default LoginPage;