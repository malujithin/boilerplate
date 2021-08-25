
import * as actionTypes from '../../store/actions/actionTypes';
import {login} from './loginPage';
import { takeEvery } from 'redux-saga/effects';

export function* watchAuth(){

    yield takeEvery(actionTypes.LOGIN,login);
}