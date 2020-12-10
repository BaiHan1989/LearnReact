import { takeEvery, all, put } from 'redux-saga/effects'

import axios from 'axios'

import {
  FETCH_HOME_MULTIDATA
} from './home/constance'

import {
  addBannersAction,
  addRecommendsAction
} from './home/actionCreators'

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;
  // yield put(changeBannersAction(banners));
  // yield put(changeRecommendAction(recommends));
  yield all([
    yield put(addBannersAction(banners)),
    yield put(addRecommendsAction(recommends))
  ])
}

function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
}

export default mySaga