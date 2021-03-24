import React, {useState} from "react";

function Contact(props) {
    const[isShowing,setIsShowing]= useState(false);
    const showHide = () =>{
        // isShowing?setIsShowing(false):setIsShowing(true);
        setIsShowing(!isShowing);
    }
    let dynamicIcon = isShowing?"fas fa-chevron-right mr-2":"fas fa-chevron-down mr-2"
    return (
        <div className="card w-50 mt-5 mx-auto mb-2">
            <div className="card-header">
            <i className={dynamicIcon} onClick={showHide}></i>
            {props.contact.name}
            <div className="float-right">
                <i className="fas fa-trash mr-1"></i>
                <i className="fas fa-pen ml-1"></i>
            </div>
            {isShowing?(<div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.contact.phone}</li>
                <li className="list-group-item">{props.contact.email}</li>
            </ul>
            </div>):null}
        </div>
        </div>
    );
}

export default Contact;