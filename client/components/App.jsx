import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Home from './Home'

class App extends React.Component{
  
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path= '/' component={Home} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
