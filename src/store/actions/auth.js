
import * as actionTypes from '../../store/actions/actionTypes';
import {withRouter} from 'react-router-dom';
import{connect } from 'react-redux';
import LoginPage from '../../containers/loginPageContainer'
export const auth=(username,password)=>{
    const data={
        username:username,
        password:password,
       
    }
    return{
       type:actionTypes.LOGIN,
       payload:data
    }
}
export function loginSuccess(data){
    return{
       type:actionTypes.LOGIN_SUCCESS,
       payload:data
}
}


export function loginFailed(data){
    
    return{
       type:actionTypes.AUTH_FAIL,
       payload:data
}
}


export function serviceCallFailed(data){
    
    return{
       type:actionTypes.SERVICE_FAIL,
       payload:data
}
}
export function saveDecodedData(data){
    return{
        type:actionTypes.SAVE_DECODED_DATA,
        data
    }
}

