import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import Cardd from './Cardd';
class AllDataAPI extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           colors:null
        }
      }
      
      componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER}/colors`).then((results)=>{
          this.setState({
            colors: results.data.map((element)=>{
              return <Cardd element={element} />
            })
          })
        })
      }
    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
