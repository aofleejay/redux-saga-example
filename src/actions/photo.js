import {
  GET_PHOTOS_REQUESTED,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED
} from '../constants/actionTypes'

export const getPhotoRequested = () => ({ type: GET_PHOTOS_REQUESTED })
export const getPhotoSuccess = photos => ({ type: GET_PHOTOS_SUCCESS, photos })
export const getPhotoFailed = error => ({ type: GET_PHOTOS_FAILED, error })
