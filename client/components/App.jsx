import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Home from './Home'
import Win from './Win'
import Lose from './Lose'


class App extends React.Component{
  
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>ScapeGoat</h1>
          <Route exact path= '/' component={Home} />

          <Route path='/win' component={Win} />
          <Route path='/lose' component={Lose} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
