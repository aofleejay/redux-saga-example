import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhotoRequested } from '../actions/photo'
import { COMMON_ERROR } from '../constants/errorMessages'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(getPhotoRequested())
  }

  render() {
    return (
      <div className="App">
        {
          this.props.error !== null ?
            <p id="error-panel">{COMMON_ERROR}</p>
          :
            this.props.photos.map(photo => (
              <div key={photo.id} style={{ display: 'inline-block' }}>
                <img src={photo.thumbnailUrl} />
              </div>
            ))
        }
      </div>
    )
  }
}

App.defaultProps = {
  photos: [],
  dispatch: () => {},
}

const mapStateToProps = state => {
  const { photos, error } = state.photos

  return { photos, error }
}

export default connect(mapStateToProps)(App)
