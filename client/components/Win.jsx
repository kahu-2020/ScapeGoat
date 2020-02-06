import React from 'react'
import {Link} from 'react-router-dom'

const Win = () => {

      return (
        <div> 
            <h3>Congrats! You beat the goat! You are a bully.</h3>
            <Link to={'/'}><button className='btn btn-warning' >Next Round!</button></Link>
        </div> 
      )

}


export default Win