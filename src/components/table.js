import { useState } from "react";

function Table({ tableData, editingIndex, onEdit, onSave, onCancel, onDelete }) {
  const [newData, setNewData] = useState({ enroll: "", name: "", subject: "", department: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    onSave(editingIndex, newData);
    setNewData({ enroll: "", name: "", subject: "", department: "" });
  };

  const handleCancelClick = () => {
    onCancel();
    setNewData({ enroll: "", name: "", subject: "", department: "" });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Enrollment No.</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Department</th>
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
                    <input type="text" name="enroll" value={newData.enroll} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="name" value={newData.name} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="subject" value={newData.subject} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="department" value={newData.department} onChange={handleInputChange} />
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
                  <td>{data.enroll}</td>
                  <td>{data.name}</td>
                  <td>{data.subject}</td>
                  <td>{data.department}</td>
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

export default Table;
