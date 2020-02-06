import React from 'react'
import {Link} from 'react-router-dom'

const Lose = () => {

      return (
        <div className="nelson"> 
            <h3>Loserrr!</h3>
            <Link to={'/'}><button className='btn btn-warning' >Next Round!</button></Link>
            <img className="nelson" src="https://pbs.twimg.com/profile_images/519192065494642688/-_MteJQZ.jpeg" alt="haha"/>
        </div> 
      )

}


export default Lose