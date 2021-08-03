import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import axios from 'axios'
import FavCardd from '/home/denakof/301/frontend-app-301/src/FavCardd.js'

class MyFavorites extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       colors:null
    }
  }
  
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER}/favcolors`).then((results)=>{
      this.setState({
        colors: results.data.map((element,index)=>{
          return <FavCardd index={index} element={element} />
        })
      })
    })
  }
  
  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
      </>
    )
  }
}

export default MyFavorites;

