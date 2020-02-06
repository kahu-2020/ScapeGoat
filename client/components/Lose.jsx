import React from 'react'
import {Link} from 'react-router-dom'

const Lose = () => {

      return (
        <div> 
            <h3>Loserrr!</h3>
            <img src="https://pbs.twimg.com/profile_images/519192065494642688/-_MteJQZ.jpeg" alt="haha"/>
            <Link to={'/'}><button className='btn btn-warning' >Next Round!</button></Link>
        </div> 
      )

}


export default Lose