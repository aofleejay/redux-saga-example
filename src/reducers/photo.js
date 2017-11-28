import { GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../constants/actionTypes'
import { photos as initialPhotos } from '../constants/initialStates'

const photos = (state = initialPhotos, action) => {
  const { type, photos, error } = action

  switch (type) {
    case GET_PHOTOS_SUCCESS:
      return { photos, error: null }

    case GET_PHOTOS_FAILED:
      return { photos: [], error }

    default:
      return state
  }
}

export default photos
