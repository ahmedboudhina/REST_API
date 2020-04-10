import React, { Component } from 'react'
import axios from "axios"
import {Card, Button} from "react-bootstrap"
import {connect} from 'react-redux'
import {getContact,deleteContact} from '../JS/actions/contactActions'
 class ContactList extends Component {
     
     componentDidMount(){
        this.props.getContact()
     }
     handleDelete=(id)=>{
        this.props.deleteContact(id)
     }
    render() {
        return (
            <div>
                {this.props.contact.map((contact,i)=>
                <div key ={contact._id}>
                    <Card
      bg="light"
     
      text='dark'
      style={{ width: '18rem' }}
    >
      <Card.Header>Contact N°:{i+1}</Card.Header>
      <Card.Body>
        <Card.Title>{contact.name} </Card.Title>
        <Card.Text>
        Telephone Number: {contact.telephone}<br></br>
        Email:{contact.email}<br></br>
        Date:{contact.date}

        </Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={()=>this.handleDelete(contact._id)}>Delete</Button>
    </Card>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        contact : state.contact.contact
    }
}

export default connect(mapStateToProps,{getContact,deleteContact}) (ContactList)