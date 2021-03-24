import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>{props.title}</b></a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;