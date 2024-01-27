import React, { useState, Fragment, useEffect } from "react";
import Form_Class from "./Form_Class";
import Table_Class from "./Table_Class";
//import { GET_CLASS_LIST } from "../Graphql/Queries";
import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';

function Combine_Class() {

  const client = new ApolloClient({
    uri: 'https://d98d-103-161-230-90.ngrok-free.app/graphql',
    method: 'POST',
    cache: new InMemoryCache(),
    fetchOptions:{
      mode: 'no-cors'
    }
  });

  
  useEffect(() => {
    
    
    const fetchCase = async () => {
			
			try {
				// const fetchCaseQuery = client.query({ query: GET_CLASS_LIST }).then(result => console.log(result));
				// // setQuery(fetchCaseQuery);
				// await fetchCaseQuery;
			} catch (error) {
				console.error(error);
			}
		};

		fetchCase();
  }, []);

  const [tableData, setTableData] = useState([
    { room_no: "R1", department: "CSE", strength: "30" },
    { room_no: "S1", department: "ECE", strength: "60" },
    { room_no: "L1", department: "Robotics", strength: "50" }

  ]);
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({
    room_no: "",
    
    department: "",
    strength: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

   
  const handleEdit = (index) => {
    setEditingIndex(index);
    console.log(`Editing row ${index}`);
  };

  const handleSave = (index, newData) => {
    const newTableData = [...tableData];
    newTableData[index] = newData;
    setTableData(newTableData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  
    console.log(`Deleting row ${index}`);
  };

  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const onFormSubmit = (event) => {
    
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { room_no: "",  department: "", strength: "" };
      setFormObject(isEmpty);
      setStep(step + 1); // Move to next step after submitting form
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Fragment>
      {step === 1 && (
        <Form_Class
          onValChange={onValChange}
          formObject={formObject}
          onFormSubmit={onFormSubmit}
        />
      )}
      {step === 2 && <Table_Class tableData={tableData}
      editingIndex={editingIndex} 
      onEdit={handleEdit}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}/>}
      
      {step === 2 && (
        
          
            <button onClick={prevStep} className="btn btn-secondary">
              Add Another Student
            </button>
          
          
        
      )}
    </Fragment>
  );
}

export default Combine_Class;
