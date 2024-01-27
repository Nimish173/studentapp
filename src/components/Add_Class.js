import React, {useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function Add_Class(){
    const { setStep, userData, setUserData} =useContext(multiStepContext);
    return(
        <div>
            <Button variant="contained" onClick={()=>setStep(5)} color="primary">Add Class Data</Button>
        </div>
    )
}