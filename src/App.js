import React from 'react';
import './App.css';
import Contact from "./components/contactList"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_Contact from './components/add_Contact';
import Header  from './components/navbar'
import {BrowserRouter , Route} from 'react-router-dom'
import Login from "./components/login"
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Route path = '/register' exact component={Register} />
    <Route path = '/' exact component={Login} />
    <Route path = '/contact' exact component={Contact}/>
    <Route path = '/add_contact' exact component={Add_Contact}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
