import React from "react";

export default function Details(props) {
  return (
    <div>
       <div className="container mt-3">
        <div className="container card" style = {{"width":"500px"}}>
            <form onSubmit={props.submit}>
                <div className="form-group mt-3">
                <label htmlFor=""><b>1.</b>Name</label>
                <input type="text" placeholder="Enter your name" name = "name" className="form-control mt-2"  required/>
                </div>
                <div className="form-group mt-3">
                <label htmlFor=""><b>2.</b>Email</label>
                <input type="email" placeholder="Enter your email" name = "email" className="form-control mt-2" required />
                <button className="btn btn-primary my-3">Next</button>
                </div>
               
            </form>
        </div>
       </div>
      
    </div>
  );
}
