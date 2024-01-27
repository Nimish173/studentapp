import React, { useState, Fragment, useEffect } from "react";
import Form from "./Form";
import Table from "./table";
import { GET_STUDENT_LIST } from "../Graphql/Queries";
//import { ADD_STUDENT } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import cors from 'cors';

function Combine() {

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://6f68-103-161-230-90.ngrok-free.app/graphql',
      credentials: 'include',
    cors: {
      // set the allowed origins
      methods: 'GET, POST, PUT, DELETE, OPTIONS', // set the allowed HTTP methods
      headers: 'Content-Type, Authorization' // set the allowed headers
    }
    }),
    cache: new InMemoryCache(),
    
  });

  
  useEffect(() => {
    
    
    const fetchCase = async () => {
			
			try {
				const fetchCaseQuery = client.query({ query: GET_STUDENT_LIST }).then(result => console.log(result));
				// setQuery(fetchCaseQuery);
				await fetchCaseQuery;
			} catch (error) {
				console.error(error);
			}
		};

		fetchCase();
  }, []);

  const [tableData, setTableData] = useState([
    { enroll: "A1", name: "John", subject: "Math", department: "Science" },
    { enroll: "A2", name: "Jane", subject: "English", department: "Arts" },
    { enroll: "A3", name: "Bob", subject: "Science", department: "Science" }

  ]);
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({
    enroll: "",
    name: "",
    subject: "",
    department: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  //const [AddStudent,{error}] = useMutation(ADD_STUDENT)
   
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
    // AddStudent({
    //   variables:formObject

      
    // })
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { enroll: "", name: "", subject: "", department: "" };
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
        <Form
          onValChange={onValChange}
          formObject={formObject}
          onFormSubmit={onFormSubmit}
        />
      )}
      {step === 2 && <Table tableData={tableData}
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

export default Combine;
