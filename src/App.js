import './App.css';
import React, { useState } from 'react';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [contact, setContact] = useState([
    { id: 1, name: "Ashish Bista", phone: "981328462", email: "brett@yopmail.com" },
    { id: 2, name: "Anish Bista", phone: "981328463", email: "brett2@yopmail.com" },
    { id: 3, name: "Shamser Bista", phone: "981328464", email: "brett3@yopmail.com" }
  ]
  );
  const[editData,setEditData]= useState({
    id:"",
    name:"",
    phone:"",
    email:""
  });

  const handleDelete = (id) => {
    let filterData = contact.filter(function (contact) {
      return contact.id !== id;
    });
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your contact has been deleted!", {
            icon: "success",
          })
          setContact(filterData);
          toast.success('Contact deleted successfully!!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      });
  }

  const handleEdit = (contact) =>{
    setEditData(contact);
  }

  const handleFormSubmit = (formData) =>{
    setContact([formData,...contact]);
  }

  return (
    <div>
      <Navbar title="Contact Management System" />
      <Form formData = {handleFormSubmit} editData={editData}/>
      {contact.map((contact) =>
        <Contact contact={contact} delete={handleDelete} key={contact.id} edit = {handleEdit} />
      )}
      <ToastContainer/>
    </div>
  );
}

export default App;
