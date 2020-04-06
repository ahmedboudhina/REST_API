import React, { Component } from "react";
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >
          Contact
          </Navbar.Brand>
          <Link to ='/contact'style={{color:"grey",margin:"20px"}}>ContactList</Link>
          <Link to ='/add_contact'style={{color:"grey",margin:"20px"}}>AddContact</Link>
          
        </Navbar>
      </div>
    );
  }
}
export default Header;
