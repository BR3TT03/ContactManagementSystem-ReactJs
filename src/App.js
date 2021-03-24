import './App.css';
import React, { useState } from 'react';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [contact, setContact] = useState([
    { id: 1, name: "Ashish Bista", phone: "981328462", email: "brett@yopmail.com" },
    { id: 2, name: "Anish Bista", phone: "981328463", email: "brett2@yopmail.com" },
    { id: 3, name: "Shamser Bista", phone: "981328464", email: "brett3@yopmail.com" }
  ]
  );

  return (
    <div>
      <Navbar title="Contact Management System" />
      <Form />
      {contact.map((contact) =>
        <Contact contact={contact} key={contact.id} />
      )}
    </div>
  );
}

export default App;
