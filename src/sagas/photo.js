import { call, put, takeEvery } from 'redux-saga/effects'
import { getPhotos } from '../api/photo'
import { getPhotoSuccess, getPhotoFailed } from '../actions/photo'
import { GET_PHOTOS_REQUESTED } from '../constants/actionTypes'

export function* getPhotosWorker() {
  try {
    const response = yield call(getPhotos)
    yield put(getPhotoSuccess(response.data))
  } catch (e) {
    yield put(getPhotoFailed(e.message))
  }
}

function* photoWatcher() {
  yield takeEvery(GET_PHOTOS_REQUESTED, getPhotosWorker)
}

export default photoWatcher
