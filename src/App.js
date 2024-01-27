import './App.css';
import React from 'react';
import Todo from './To_Do/Todo';
import Add from './components/Add';
import Combine from './components/Combine';
import Combine_Teachers from './components/Combine_Teachers';
import Combine_Subject from './components/Combine_Subject';
import Combine_Class from './components/Combine_Class';
import { Stepper, StepLabel, Step, Switch } from '@mui/material';
import { multiStepContext } from './StepContext';
import { useContext, useState } from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Students from './components/Students';
import Teachers from './components/Teachers';
import Subjects from './components/Subjects';
import Class from './components/Class';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink,gql } from '@apollo/client';


function App() {
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

  const { currentStep,finalData}= useContext(multiStepContext);
  const [studentData, setStudentData] = useState([]);
  const addStudentData = (data) => {
    setStudentData((prevStudentData) => [...prevStudentData, data]);
  };
  function showStep(step){
    switch(step){
      case 1:
        return 
      case 2:
        return <Combine/>
      case 3: 
        return <Combine_Teachers/>
      case 4:
        return <Combine_Subject/>
      case 5:
        return <Combine_Class/>
      default:
        return null;
    }
  }
  return (
    <div>
      <ApolloProvider client={client}>
<Router>
<Navbar/>  
    
      <Routes>
        <Route path='/students' element={<Students />}/>
        <Route path='/teachers' element={<Teachers />}/>
        <Route path='/subjects' element={<Subjects />}/>
        <Route path='/class'  element={<Class />}/>
      </Routes>
      </Router> 

      {/* <div className="centre-stepper">
        <Stepper style={{width: '18%'}} activeStep={currentStep -1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div> */}
      { showStep(currentStep)}
      </ApolloProvider>
    </div>


  );
  
}

export default App;
