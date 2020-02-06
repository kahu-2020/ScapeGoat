import React from 'react'
import {Link} from 'react-router-dom'
import { getGoat } from '../api/api'
import data from '../../data'


class Goats extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    const weapon = data[Math.ceil(Math.random()* data.length)]

    return (

        <React.Fragment>
            <img className='images' src="http://placegoat.com/400/400" /> 

            <div className='btn'></div>
            <img className='images'src={weapon.image} alt="img"/>
            <div className='weapon'>
                <ul>
                    <p>{weapon.name}</p>
                    <p>{weapon.description}</p>
                </ul>
            </div>
        </React.Fragment>
    )
  }
}

export default Goats
