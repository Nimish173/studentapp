
function Form_Class({ onValChange, formObject, onFormSubmit,prevStep }) {
 
    return (
  
          <div>
        <div className="container">
          <div className="row">
          <br></br>
          <h1 className="text-center">Class Registration Form</h1>
          <br></br>
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
              <form>
                  
  
          <div className="form-group">
              <label>Department:</label>
            <input
              type="text"
              placeholder="Enter Your Department."
              onChange={onValChange}
              value={formObject.department}
              name="department"
            />
          </div>
  
          <div className="form-group">
                  <label>Room No:</label>
            <input
              type="text"
              placeholder="Enter Room No."
              onChange={onValChange}
              value={formObject.room_no}
              name="room_no"
            />
          </div>

          <div className="form-group">
              <label>Strength:</label>
            <input
              type="int"
              placeholder="Enter total strength"
              onChange={onValChange}
              value={formObject.strength}
              name="strength"
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
    export default Form_Class;