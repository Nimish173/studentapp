import { useState } from "react";

function Table_Class({ tableData, editingIndex, onEdit, onSave, onCancel, onDelete }) {
  const [newData, setNewData] = useState({ enroll: "", name: "", subject: "", department: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    onSave(editingIndex, newData);
    setNewData({  room_no: "", department: "", strength: "" });
  };

  const handleCancelClick = () => {
    onCancel();
    setNewData({ room_no: "", department: "", strength: ""  });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            
            <th>Room No</th>
            <th>Department</th>
            <th>Strength</th>
            
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  
                  <td>
                    <input type="text" name="room_no" value={newData.room_no} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="department" value={newData.department} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="strength" value={newData.strength} onChange={handleInputChange} />
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={handleSaveClick}>
                      Save
                    </button>{" "}
                    <button className="btn btn-warning" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => onDelete(index)}>
                      Delete
                    </button>
                  </td>
                </>
              ) : (
                <>
                  
                  <td>{data.room_no}</td>
                  <td>{data.department}</td>
                  <td>{data.strength}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => onEdit(index)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => onDelete(index)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_Class;
