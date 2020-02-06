import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Goats from './Goats'
import Home from './Home'
import Win from './Win'
import Lose from './Lose'

class App extends React.Component{
  
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* Components go here */}
          <h1>ScapeGoat</h1>
          <Route exact path= '/' component={Home} />
          <Route path='/goat' component={Goats}/>
          <Route path='/win' component={Win} />
          <Route path='/lose' component={Lose} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
