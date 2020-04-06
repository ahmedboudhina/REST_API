import React, { Component } from 'react'
import axios from "axios"
import {Card, Button} from "react-bootstrap"

 class ContactList extends Component {
     state={
         contact:[]
     }
     componentDidMount(){
         axios.get("http://localhost:4000/contact").then(response =>{
         this.setState({
             contact: response.data
         })    
         })
     }
     handleDelete=(id)=>{
         axios.delete(`http://localhost:4000/contact/delete_contact/${id}`)
         this.setState({
             contact:this.state.contact.filter(e=>e._id !==id)
         })
     }
    render() {
        return (
            <div>
                {this.state.contact.map((contact,i)=>
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
export default ContactList