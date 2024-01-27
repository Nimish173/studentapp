
function Form_Subject({ onValChange, formObject, onFormSubmit,prevStep }) {
 
    return (
  
          <div>
        <div className="container">
          <div className="row">
          <br></br>
          <h1 className="text-center">Subject Registration Form</h1>
          <br></br>
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
              <form>
                  
  
          <div className="form-group">
              <label>Code:  </label>
            <input
              type="text"
              placeholder="Enter Sub Code"
              onChange={onValChange}
              value={formObject.code}
              name="code"
            />
          </div>
  
          <div className="form-group">
                  <label>SubJect Name:</label>
            <input
              type="text"
              placeholder="Enter Subject Name"
              onChange={onValChange}
              value={formObject.name}
              name="name"
            />
          </div>
  
          <div className="form-group">
              <label>Teacher:</label>
            <input
              type="text"
              placeholder="Enter Teacher's Name"
              onChange={onValChange}
              value={formObject.teacher}
              name="teacher"
            />
          </div>
  
          <div className="form-group">
              <label>Credits</label>
            <input
              type="int"
              placeholder="Enter Credits"
              onChange={onValChange}
              value={formObject.credits}
              name="credits"
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
    export default Form_Subject;