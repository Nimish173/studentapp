import React, { useState, Fragment, useEffect } from "react";
import Form_Subject from "./Form_Subject";
import Table_Subject from "./Table_Subject";
//import { GET_SUBJECT_LIST } from "../Graphql/Queries";
import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';

function Combine_Subject() {

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
				// const fetchCaseQuery = client.query({ query: GET_SUBJECT_LIST }).then(result => console.log(result));
				// // setQuery(fetchCaseQuery);
				// await fetchCaseQuery;
			} catch (error) {
				console.error(error);
			}
		};

		fetchCase();
  }, []);

  const [tableData, setTableData] = useState([
    { code: "R1", name: "Romance", teacher: "Shahrukh", credits: "3" },
    { code: "S1", name: "Stunts", teacher: "Salman", credits: "6" },
    { code: "L1", name: "Life", teacher: "Imraan", credits: "5" }

  ]);
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({
    code: "",
    name: "",
    teacher: "",
    credits: "",
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
      const isEmpty = { code: "", name: "", teacher: "", credits: "" };
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
        <Form_Subject
          onValChange={onValChange}
          formObject={formObject}
          onFormSubmit={onFormSubmit}
        />
      )}
      {step === 2 && <Table_Subject tableData={tableData}
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

export default Combine_Subject;
