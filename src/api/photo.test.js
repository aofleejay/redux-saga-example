import axios from 'axios'
import sinon from 'sinon'
import { getPhotos } from './photo'

describe('Test photo API', () => {
  let mockAxios

  it('Test getPhotos call with correct url', () => {
    mockAxios = sinon.mock(axios)
      .expects('get')
      .withArgs('https://jsonplaceholder.typicode.com/photos')
      .once()

    getPhotos()

    mockAxios.verify()
  })

  afterEach(() => {
    mockAxios.restore()
  })
})
