import { all, call, put, takeEvery } from 'redux-saga/effects';
import { signupApi, loginApi, logoutAPI } from '../Common/apis/auth.api';
import { EmailVerify, LoggedoutUser, LoggedUser } from '../Redux/Action/auth.action';
import *as ActionTypes from '../Redux/ActionType';
import { setAlert } from '../Redux/Action/alert.action';
import { history } from '../history';

function* fetchUser(action){
    try{
        const user = yield call(signupApi, action.payload);
        yield put(setAlert({text:user.payload , color: 'success'}))
        yield put(EmailVerify(user));
    }

    catch (e) {
        yield put(setAlert({text:e.payload , color: 'error'}))
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* loginForm(action){
    try{
       const user = yield call(loginApi, action.payload);
       yield put(setAlert({text:"Email Successfully" , color: 'success'}))
       yield put (LoggedUser(user))
       history.push("/")
       // console.log(user);
 
    }
    catch(e){
       yield put(setAlert({text:e.payload , color: 'error'}))
       // console.log(e);
    }
 }

 function* logout(action){
    try{
       const user = yield call(logoutAPI);
       yield put (LoggedoutUser())
       history.push("/login")
       yield put(setAlert({text:user.payload, color: 'success'}))
    }
    catch(e){
       yield put(setAlert({text:e.payload , color: 'error'}))
    }
 }


function* watchsaga(){
    yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);

  yield takeEvery(ActionTypes.LOGIN_FORM, loginForm);

  yield takeEvery(ActionTypes.LOGOUT_USER,logout);
}

export function* authSaga () {
    yield all ([watchsaga()])
};