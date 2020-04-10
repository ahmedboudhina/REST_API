import React, { Component } from "react";
import { Form, Button,Alert } from "react-bootstrap";
import { register } from "../JS/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Register extends Component {
  state = {
    name: "",
    password: "",
    email: "",
  };

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addUser = (e, payload) => {
    e.preventDefault();
    this.props.register(payload);
  };

  render() {
    const {error,isAuthenticated} = this.props
    return (
      <div className="container mt-5">
        {isAuthenticated?<Redirect to="/contact"></Redirect>:null}
        <Form>
        {error.id !=="REGISTRE_FAIL"?null:<Alert variant="danger">{error.msg.toString()}</Alert>}
          <Form.Group controlId="formBasicName">
            <Form.Label>Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.handlechange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handlechange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handlechange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => this.addUser(e, this.state)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { error: state.error, isAuthenticated: state.auth.token };
};

export default connect(mapStateToProps, { register })(Register);
