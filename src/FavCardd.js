import React, { Component } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export class FavCardd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  removefav = () => {
    axios.delete(
      `${process.env.REACT_APP_SERVER}/removecolors/${this.props.index}?email=${this.props.auth0.user.email}`,
      this.props.element
    );
  };
  updatefav = (e) => {
    e.preventDefault();
    let ColorObj = {
      title: e.target.title.value,
      imageurl: e.target.title.value,
    };
    axios.put(
      `${process.env.REACT_APP_SERVER}//updatecolors/${this.props.index}?email=${this.props.auth0.user.email}`,
      ColorObj
    );
  };
  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  defaultValue={this.props.element.title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>imgurl</Form.Label>
                <Form.Control
                  name="imageurl"
                  type="text"
                  defaultValue={this.props.element.imageurl}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button> */}
            <Button variant="primary" onClick={this.updatefav}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{this.props.element.title}</Card.Title>
              <Card.Text>{this.props.element.imageurl}</Card.Text>
              <Button onClick={this.addtofav} variant="primary">
                Add to fav
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default FavCardd;
