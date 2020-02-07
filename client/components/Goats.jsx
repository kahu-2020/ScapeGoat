import React from 'react'
import { Link } from 'react-router-dom'
import { getGoat } from '../api/api'
import data from '../../data'


class Goats extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goatUrl: ''
        }
    }

    componentDidMount() {

    }

    render() {

        const weapon = data[Math.ceil(Math.random() * data.length -1)]
        let endLink

        if(weapon.name == 'Vacuum Cleaner') {
            endLink = <Link to='/win'><button className='btn btn-warning' >Fight!</button></Link>

        } else {
          endLink = <Link to='/lose'><button className='btn btn-warning' >Fight!</button></Link>
        }
        

        return (
  
            <div>
                <div className='container'>
                    <div className='info'>
                        <h1>{weapon.name}</h1>
                        <p>{weapon.description}</p>
                    </div>
                    <img className='images' src={weapon.image} alt="img" />
                    <img className='images' src="http://placegoat.com/400/400" />
                </div>
                {endLink}
            </div>
        )
    }
}

export default Goats
