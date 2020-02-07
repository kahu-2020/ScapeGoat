import React from 'react'
import {Link} from 'react-router-dom'
import { getGoat } from '../api/api'
import data from '../../data'


class Goats extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        goatUrl: ''
    }
  }

  componentDidMount() {

  }

  render() {

    const weapon = data[Math.ceil(Math.random()* data.length)]

    return (

            <div className='container'>
                <div className='info'>
                    <p>{weapon.name}</p>
                    <p>{weapon.description}</p>
                </div>
                <img className='images'src={weapon.image} alt="img"/>
                <img className='images' src="http://placegoat.com/400/400" /> 

            </div>
    )
  }
}

export default Goats
