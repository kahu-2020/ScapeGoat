import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {


    render() {
      return (
        <div> 
            <Link to={'/Goats'}><button className='btn btn-warning' >Fight!</button></Link>
        </div> 
        )
    }

}


export default Home

