import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { wrap } from 'module';

describe('Test <App />', () => {
  let props

  beforeEach(() => {
    props = {
      photos: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "http://placehold.it/600/92c952",
          "thumbnailUrl": "http://placehold.it/150/92c952"
        }
      ],
      error: null,
    }
  })

  it('Display images correctly', () => {
    const wrapper = shallow(<App {...props} />)

    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('Display error correctly', () => {
    props.error = 'Request failed with status code 404'

    const wrapper = shallow(<App {...props} />)

    expect(wrapper.find('#error-panel')).toHaveLength(1)
  })
})
