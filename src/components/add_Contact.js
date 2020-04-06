import React, { Component } from "react";
import {Form, Button} from "react-bootstrap"
import axios from "axios";

class Add_Contact extends Component {
  state={
  
      name:"",
      telephone:"",
      email:"",
    
  }
  handlechange=(e)=>{
    this.setState({
     [e.target.name]:e.target.value
    })
  }
  handleAdd=()=>{
    const newcontact={
      name:this.state.name,
      email:this.state.email,
      telephone:this.state.telephone
    }
    axios.post('http://localhost:4000/contact/add_contact',newcontact)
  }
  render() {
    return (
      <div>
        <Form >
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" value={this.state.name}onChange={this.handlechange}name="name"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"value={this.state.email}onChange={this.handlechange}name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number"value={this.setState.telephone}onChange={this.handlechange}name="telephone" />
          </Form.Group>
          
          <Button variant="primary" type="submit"onClick={this.handleAdd}>
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
export default Add_Contact;
