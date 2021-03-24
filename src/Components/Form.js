import React from 'react';
function Form() {
    return (
        <div className="container mt-4">
            <div className="card w-50 mx-auto">
                <div className="card-header bg-primary">
                    <h1>Contact Form</h1>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="name" className="form-control mb-1" />
                                <label htmlFor="phone">MobileNo</label>
                                <input type="text" placeholder="mobile no" className="form-control mb-1" />
                                <label htmlFor="email">Em@il</label>
                                <input type="text" placeholder="email" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                </div>
            </div>

        </div>
    );
}
export default Form;