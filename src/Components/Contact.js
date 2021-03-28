import React, { useState } from "react";

function Contact(props) {

    const [isShowing, setIsShowing] = useState(false);

    const [state, setState] = useState({
        id:props.contact.id,
        name: props.contact.name,
        email: props.contact.email,
        phone: props.contact.phone
    });
    
    const showHide = () => {
        // isShowing?setIsShowing(false):setIsShowing(true);
        setIsShowing(!isShowing);
    }

    const [error, setError] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [isEditing, setEditing] = useState(false);
    let dynamicIcon = isShowing ? "fas fa-chevron-right mr-2" : "fas fa-chevron-down mr-2"

    const handleDelete = () => {
        props.delete(props.contact.id);
    }

    const handleEdit = () => {
        setEditing(true); 
    }

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
        props.edit(state);
        setEditing(false);
    }

    if (isEditing) {
        return (<div className="container mt-4">
            <div className="card w-50 mx-auto">
                <div className="card-header bg-primary">
                    <h1 className="text-white">Contact Edit Form</h1>
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
                        <button type="submit" className="btn btn-primary float-right">Update</button>
                    </form>
                </div>
            </div>

        </div>
        );
    }
    else {
        return (
            <div className="card w-50 mt-5 mx-auto mb-2">
                <div className="card-header">
                    <i className={dynamicIcon} onClick={showHide}></i>
                    {props.contact.name}
                    <div className="float-right">
                        <i className="fas fa-trash mr-1" onClick={handleDelete}></i>
                        <i className="fas fa-pen ml-1" onClick={handleEdit}></i>
                    </div>
                </div>
                {isShowing ? (<div className="card-body bg-white">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.contact.phone}</li>
                        <li className="list-group-item">{props.contact.email}</li>
                    </ul>
                </div>) : null}
            </div>
        );
    }
}

export default Contact;