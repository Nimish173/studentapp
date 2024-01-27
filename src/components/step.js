import React, { useState } from 'react';
import App from './App';
import { useContext } from 'react';
import Add from './Add';
import Combine from './Combine';
import Add_Teachers from './Add_Teachers';
import Combine_Teachers from './Combine_Teachers';

export const { currentStep,finalData}= useContext(multiStepContext);
const step = () =>{
    function showStep(step){
        switch(step){
          case 1:
            return <Add/>
            case 2:
              return <Combine/>
        }
      }

      function showStep_teacher(step){
        switch(step){
          case 1:
            return <Add_Teachers/>
            case 2:
              return <Combine_Teachers/>
        }
      }

      function showStep_subject(step){
        switch(step){
          case 1:
            return <Add/>
            case 2:
              return <Combine/>
        }
      }

      function showStep_class(step){
        switch(step){
          case 1:
            return <Add/>
            case 2:
              return <Combine/>
        }
      }
    
}
export default step;