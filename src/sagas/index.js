import { all } from 'redux-saga/effects'
import photo from './photo'

export default function* rootSaga() {
  yield all([
    photo()
  ])
}
