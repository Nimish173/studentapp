import { useState } from "react";

function Table_Teachers({ tableData, editingIndex, onEdit, onSave, onCancel, onDelete }) {
  const [newData, setNewData] = useState({ id: "", name: "", subject: "", email: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    onSave(editingIndex, newData);
    setNewData({ id: "", name: "", subject: "", email: "" });
  };

  const handleCancelClick = () => {
    onCancel();
    setNewData({ id: "", name: "", subject: "", email: "" });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
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
                    <input type="text" name="id" value={newData.id} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="name" value={newData.name} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="subject" value={newData.subject} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="email" value={newData.email} onChange={handleInputChange} />
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
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.subject}</td>
                  <td>{data.email}</td>
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

export default Table_Teachers;
