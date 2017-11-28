import photo from './photo'

describe('Test photo reducer', () => {
  it('Test photo reducer when action type is GET_PHOTOS_SUCCESS', () => {
    const photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      }
    ]
    const action = { type: 'GET_PHOTOS_SUCCESS', photos }
    const expected = { error: null, photos }

    const actual = photo(undefined, action)

    expect(actual).toEqual(expected)
  })

  it('Test photo reducer when action type is GET_PHOTOS_FAILED', () => {
    const error = new Error('Request failed with status code 404')    
    const action = { type: 'GET_PHOTOS_FAILED', error: error.message }
    const expected = { error: error.message, photos: [] }

    const actual = photo(undefined, action)

    expect(actual).toEqual(expected)
  })

  it('Test photo reducer when action type is UNINTERESTED_TYPE', () => {
    const action = { type: 'UNINTERESTED_TYPE' }
    const expected = { error: null, photos: [] }

    const actual = photo(undefined, action)

    expect(actual).toEqual(expected)
  })
})