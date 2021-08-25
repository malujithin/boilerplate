import React, { Component } from 'react';
import Home from '../../components/Home/home';
import{connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
// import { push } from 'react-router-redux'; 

export class HomePage extends Component { 

    backAction=()=>{
         this.props.OnLogOut(); 
         this.props.history.goBack();
    }

    render(){
        console.log(this.props)
        return(
        <div>
            <Home backAction={this.backAction} firstName={this.props.ctr.decodedData.firstname}/>
        </div>
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
        OnLogin:()=>{ dispatch({type:actionTypes.LOGIN});
    },
        OnLogOut:()=>{ dispatch({type:actionTypes.LOGOUT});
                    //    dispatch(push('/'));
                },
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);