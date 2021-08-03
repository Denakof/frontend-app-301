import React, { Component } from "react";
import { Card ,Button} from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
export class Cardd extends Component {
     addtofav =()=>{
        axios.post(`${process.env.REACT_APP_SERVER}/favcolors?email=${this.props.auth0.user.email}`,this.props.element);
        }
      
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.props.element.title}</Card.Title>
            <Card.Text>
            {this.props.element.imageurl}
            </Card.Text>
            <Button onClick={this.addtofav} variant="primary">Add to fav</Button>
          </Card.Body>
        </Card>
      </div>
    );
    }

  }
export default withAuth0(Cardd);
