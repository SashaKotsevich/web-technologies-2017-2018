import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from './api'

function* fetchUser(action) {
    try {
       const user = yield call(request, action.link);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function* fetchRepos(action){
    try {
       const data = yield call(request, action.link);
       yield put({type: "REPOS_FETCH_SUCCEEDED", data: data});
    } catch (e) {
       yield put({type: "REPOS_FETCH_FAILED", message: e.message});
    }
 }

 function* fetchOrgs(action){
    try {
       const data = yield call(request, action.link);
       yield put({type: "ORGS_FETCH_SUCCEEDED", data: data});
    } catch (e) {
       yield put({type: "ORGS_FETCH_FAILED", message: e.message});
    }
 }
 function* fetchFollows(action){
    try {
       const data = yield call(request, action.link);
       yield put({type: "FOLLOWS_FETCH_SUCCEEDED", data: data});
    } catch (e) {
       yield put({type: "FOLLOWS_FETCH_FAILED", message: e.message});
    }
 }

 function* fetchTopPopular(action){
  try {
     const data = yield call(request, action.link);
     yield put({type: "TOPPOPULAR_FETCH_SUCCEEDED", data: data});
  } catch (e) {
     yield put({type: "TOPPOPULAR_FETCH_FAILED", message: e.message});
  }
}

function* fetchTopGrowing(action){
  try {
     const data = yield call(request, action.link);
     yield put({type: "TOPGROWING_FETCH_SUCCEEDED", data: data});
  } catch (e) {
     yield put({type: "TOPGROWING_FETCH_FAILED", message: e.message});
  }
}

 function* mySaga() {
    yield takeEvery("ChangeUser", fetchUser);
    yield takeEvery("ChangeRepos", fetchRepos);
    yield takeEvery("ChangeOrgs", fetchOrgs);
    yield takeEvery("ChangeFollows", fetchFollows);
    yield takeEvery("ChangeTopPopular", fetchTopPopular);
    yield takeEvery("ChangeTopGrowing", fetchTopGrowing);
  }

  export default mySaga;