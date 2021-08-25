//any side effects or async calls

import {put} from 'redux-saga/effects';
import request from '../../utils/request';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth.js';
import { call } from 'redux-saga/effects';
// import { browserHistory } from 'react-router'
// import { browserHistory } from 'react-router-dom';
import history from '../../history';
import jwt from 'jwt-decode';
// import { createBrowserHistory } from 'history'

// import {BrowserRouter} from 'react-router-dom';
// import { push } from 'react-router-redux';

const BASE_LOGIN_URL = 'https://merch.aws.na.sysco.net/securityservice/login/';
const SESSION_TIME = 1800; //30min

export function* login(action){ //generator
  
 //each step with yield

  const requestURL = `${BASE_LOGIN_URL}authenticate`;
    const userObj = {
    password:action.payload.password,
    username:action.payload.username,
    expirationTime: SESSION_TIME,
  };
  const requestAttrs = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  };


  try {
    // Call our request helper (see 'utils/request')
    const loginResponse = yield call(request, requestURL, requestAttrs);
    yield put(actions.loginSuccess((loginResponse.token)));
    yield put (actions.saveDecodedData(jwt(loginResponse.token)));
    history.push('/home_page');
    //window.location.reload();
    if (document.getElementById('loadingIndicatorMain')) {
      document.getElementById('loadingIndicatorMain').style.display = 'none';
    }
  } catch (err) {
    console.log('error in login');
    const test = JSON.stringify(err);
    if (test === '{}') {
      yield put(actions.serviceCallFailed('failed'));
      console.log(`Problem with network ${test}`);
    } else {
      console.log(`Wrong credentials ${test}`);
      yield put(actions.loginFailed('failed'));
    }

    if (document.getElementById('loadingIndicatorMain')) {
      document.getElementById('loadingIndicatorMain').style.display = 'none';
    }

    
  }
    
}