import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../JS/actions/authActions";

class Login extends Component {
  state = {
    password: "",
    email: "",
  };
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlelogin = (e, payload) => {
    e.preventDefault();
    this.props.login(payload);
  };

  render() {
    const { isAuth, error } = this.props;
    return (
      <div className="container mt-5">
        {isAuth ? <Redirect to="/contact"></Redirect> : null}
        <Form>
          {error.id !== "LOGIN_FAIL" ? null : (
            <Alert variant="danger">{error.msg.toString()}</Alert>
          )}
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
            onClick={(e) => this.handlelogin(e, this.state)}
          >
            Submit
          </Button>
          <br></br>
          <br></br>
          <Link to="/register"> register</Link>
        </Form>
      </div>
    );
  }
}
const mapSTP = (state) => {
  return { error: state.error, isAuth: state.auth.token };
};

export default connect(mapSTP, { login })(Login);
