import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../JS/actions/authActions";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Contact</Navbar.Brand>
          {!this.props.token ? (
            <Redirect to="/"></Redirect>
          ) : (
            <>
              <Link to="/contact" style={{ color: "grey", margin: "20px" }}>
                ContactList
              </Link>
              <Link to="/add_contact" style={{ color: "grey", margin: "20px" }}>
                AddContact
              </Link>
              <Nav.Link href="#" onClick={this.props.logout}>
                Lougout{" "}
              </Nav.Link>
            </>
          )}
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps, { logout })(Header);
