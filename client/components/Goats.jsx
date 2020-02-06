import React from 'react'
import {Link} from 'react-router-dom'
import { getGoat } from '../api/api'

class Goats extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        goatArr: [],
        goatUrl: ''
    }

  }
  

  componentDidMount() {
    // fetch("http://placegoat.com/200/200")
    getGoat()
   
    .then(image => {
         
        const goats = image.data

        console.log(image.data)
        this.setState({
            goatArr: goats 
        }) 
    })
  
  }


  render() {
    return (


        <React.Fragment>
            <img className='goatImg' src="http://placegoat.com/200/200" />
            <div>Goat</div>
        </React.Fragment>
     
    )
  }
}

export default Goats
