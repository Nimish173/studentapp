import React from 'react';
import './form.css'
import { Button } from 'bootstrap';
function Form({ onValChange, formObject, onFormSubmit,prevStep }) {
 
  return (

        <div>
      <div className="container">
        <div className="row">
        <br></br>
        <h1 className="text-center">Student Registration Form</h1>
        <br></br>
        <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
            <form>
                

        <div className="form-group">
            <label>Enrollment No:</label>
          <input
            type="text"
            placeholder="Enter Enrollment No."
            onChange={onValChange}
            value={formObject.enroll}
            name="enroll"
          />
        </div>

        <div className="form-group">
                <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={onValChange}
            value={formObject.name}
            name="name"
          />
        </div>

        <div className="form-group">
            <label>Subject:</label>
          <input
            type="text"
            placeholder="Enter Subject"
            onChange={onValChange}
            value={formObject.subject}
            name="subject"
          />
        </div>

        <div className="form-group">
            <label>Department:</label>
          <input
            type="text"
            placeholder="Enter Department Name"
            onChange={onValChange}
            value={formObject.department}
            name="department"
          />
        </div>
        <br></br>
        

        <div className="d-grid mx-auto">
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
          <br></br>
          
          </div>
          <div className="d-grid mx-auto text">
          <button onClick={prevStep} className="btn btn-secondary">
              Back
            </button>
        
          </div>
          
          </form>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default Form;