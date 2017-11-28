import { call, put } from 'redux-saga/effects'
import { getPhotos } from '../api/photo'
import { getPhotosWorker } from './photo'

describe('Test photo saga', () => {
  it('Test getPhotosWorker when get photos success', () => {
    const photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      }
    ]
    const response = { data: photos }
    const action = { type: 'GET_PHOTOS_SUCCESS', photos }

    const gen = getPhotosWorker()
    
    expect(gen.next().value).toEqual(call(getPhotos))
    expect(gen.next(response).value).toEqual(put(action))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  it('Test getPhotosWorker when get photos failed', () => {
    const error = new Error('Request failed with status code 404')
    const action = { type: 'GET_PHOTOS_FAILED', error: error.message }

    const gen = getPhotosWorker()
    
    expect(gen.next().value).toEqual(call(getPhotos))
    expect(gen.throw(error).value).toEqual(put(action))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})