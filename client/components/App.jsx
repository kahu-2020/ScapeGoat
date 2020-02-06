import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Goats from './Goats'

class App extends React.Component{
  
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* Components go here */}
          <Route path='/goat' component={Goats}/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
