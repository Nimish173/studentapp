import { useState } from "react";

function Table_Subject({ tableData, editingIndex, onEdit, onSave, onCancel, onDelete }) {
  const [newData, setNewData] = useState({ code: "", name: "", teacher: "", credits: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    onSave(editingIndex, newData);
    setNewData({ code: "", name: "", teacher: "", credits: "" });
  };

  const handleCancelClick = () => {
    onCancel();
    setNewData({ code: "", name: "", teacher: "", credits: "" });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Teacher</th>
            <th>Credits</th>
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
                    <input type="text" name="code" value={newData.code} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="name" value={newData.name} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="teacher" value={newData.teacher} onChange={handleInputChange} />
                  </td>
                  <td>
                    <input type="text" name="credits" value={newData.credits} onChange={handleInputChange} />
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
                  <td>{data.code}</td>
                  <td>{data.name}</td>
                  <td>{data.teacher}</td>
                  <td>{data.credits}</td>
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

export default Table_Subject;
