import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Topbar from './TopBar'
import { Route } from 'react-router-dom'
import AlbumsContainer from './AlbumsContainer'
class App extends Component {
  render () {
    return <div>
      <App1 />
    </div>
  }
}

export default App

const App1 = () => (
  <Grid>
    <Topbar />
    <Route path='/albums' component={AlbumsContainer} />
  </Grid>
)
