import React, { useState, Fragment, useEffect } from "react";
import Form_Teachers from "./Form_Teachers";
import Table_Teachers from "./Table_Teachers";
//import { GET_TEACHER_LIST } from "../Graphql/Queries";
import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';

function Combine_Teachers() {

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
				// const fetchCaseQuery = client.query({ query: GET_TEACHER_LIST }).then(result => console.log(result));
				// // setQuery(fetchCaseQuery);
				// await fetchCaseQuery;
			} catch (error) {
				console.error(error);
			}
		};

		fetchCase();
  }, []);

  const [tableData, setTableData] = useState([
    { id: "A1", name: "Dixi", subject: "Math", email: "dixi@gmail.com" },
    { id: "A2", name: "Prathmesh", subject: "English", email: "nimi@gmail.com" },
    { id: "A3", name: "numerology", subject: "Science", email: "harshit@gmail.com" }

  ]);
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({
    id: "",
    name: "",
    subject: "",
    email: "",
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
      const isEmpty = { id: "", name: "", subject: "", email: "" };
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
        <Form_Teachers
          onValChange={onValChange}
          formObject={formObject}
          onFormSubmit={onFormSubmit}
        />
      )}
      {step === 2 && <Table_Teachers tableData={tableData}
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

export default Combine_Teachers;
