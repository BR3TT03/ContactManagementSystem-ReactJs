import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';
function Form(props) {
    const [state, setState] = useState({
        id:"",
        name: "",
        email: "",
        phone: ""
    });

    const [error, setError] = useState({
        name:"",
        email:"",
        phone:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name === "") {
            return setError({ name: "Please enter your name" });
        }
        else if (state.phone === "") {
            return setError({ phone: "Please enter your mobile number" });
        }
        else if (state.email === "") {
            return setError({ email: "Please enter your email" });
        }
        setError("");
        setState({...state,id:6});
        console.log(state.id);
        props.formData(state);
        setState("");
    }
    return (
        <div className="container mt-4">
            <div className="card w-50 mx-auto">
                <div className="card-header bg-primary">
                    <h1 className="text-white">Contact Form</h1>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text" 
                                placeholder="name" 
                                className="form-control mb-1" 
                                onChange={handleChange} 
                                name="name" value={state.name} />
                            <span style={{ color: "red" }}>{error.name}</span><br></br>
                            <label htmlFor="phone">MobileNo</label>
                            <input 
                                type="text" 
                                placeholder="mobile no" 
                                className="form-control mb-1" 
                                onChange={handleChange} 
                                name="phone" value={state.phone} />
                            <span style={{ color: "red" }}>{error.phone}</span><br></br>
                            <label htmlFor="email">Em@il</label>
                            <input 
                                type="text" 
                                placeholder="email" 
                                className="form-control" 
                                onChange={handleChange} name="email" value={state.email} />
                            <span style={{ color: "red" }}>{error.email}</span>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default Form;