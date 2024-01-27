import React, {useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function Add(){
    const { setStep, userData, setUserData} =useContext(multiStepContext);
    return(
        <div>
            <Button variant="contained" onClick={()=>setStep(2)} color="primary">Add Student Data</Button>
        </div>
    )
}