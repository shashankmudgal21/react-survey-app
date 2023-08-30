import React from 'react'

export default function Question(props) {
  return (
    <div>
        <div className="container mt-3">
        <div className="container card" style = {{"width":"500px"}}>
            <form onSubmit={props.submit}>
                <div className="form-group mt-3">
                <label htmlFor="" className='my-2'><b>3.</b>What are you currently doing</label>
                <br />
                <input type="radio" name="Prof" id="" className='mx-2' value = "Teacher" />Teacher
                <input type="radio" name="Prof" id="" className='mx-2' value = "Student"/>Student
                <input type="radio" name="Prof" id="" className='mx-2' value = "Programmer"/>Programmer
                <input type="radio" name="Prof" id="" className='mx-2' value = "Other"/>Other
                </div>
                <div className="form-group mt-3">
                <label htmlFor="" className='my-2'><b>4.</b>Please rate our courses</label>
                <br />
                <input type="radio" name="rate" id="" className='mx-2' value = "Poor"/>Poor
                <input type="radio" name="rate" id="" className='mx-2' value = "Good"/>Good
                <input type="radio" name="rate" id="" className='mx-2' value = "Excellent"/>Excellent
                </div>
                <div className="form-group mt-3">
                <label htmlFor="" className='my-2'><b>5.</b>Write your review here</label>
                {/* <input type="textarea" placeholder="Enter your review" /> */}
                <textarea name="query" id="" cols="30" rows="5" className='form-control'></textarea>
                <button className="btn btn-primary mt-3">Save</button>
                </div>
               
            </form>
        </div>
       </div>
    </div>
  )
}
