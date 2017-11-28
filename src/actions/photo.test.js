import { getPhotoRequested, getPhotoSuccess, getPhotoFailed } from './photo'

describe('Test photo action creator', () => {
  it('Test getPhotoRequested action creator', () => {
    const expected = { type: 'GET_PHOTOS_REQUESTED' }

    const actual = getPhotoRequested()

    expect(actual).toEqual(expected)
  })

  it('Test getPhotoSuccess action creator', () => {
    const photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      }
    ]
    const expected = { type: 'GET_PHOTOS_SUCCESS', photos }

    const actual = getPhotoSuccess(photos)

    expect(actual).toEqual(expected)
  })

  it('Test getPhotoFailed action creator', () => {
    const error = new Error('Request failed with status code 404')
    const expected = { type: 'GET_PHOTOS_FAILED', error: error.message }

    const actual = getPhotoFailed(error.message)

    expect(actual).toEqual(expected)
  })
})
