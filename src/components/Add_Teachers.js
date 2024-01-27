import React, {useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function Add_Teachers(){
    const { setStep, userData, setUserData} =useContext(multiStepContext);
    return(
        <div>
            <Button variant="contained" onClick={()=>setStep(3)} color="primary">Add Teachers Data</Button>
        </div>
    )
}