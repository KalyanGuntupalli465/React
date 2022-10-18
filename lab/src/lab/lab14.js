import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
const Bmi=()=>

{
    return(
        <div className="b1">
            <table><tr>
            <TextField id="standard-basic" label="enter height in cm" variant="standard" /></tr>
           <tr>  <TextField id="standard-basic" label="enter weight in kgs" variant="standard" /></tr>
            <tr> <Button variant="outlined">Measure</Button></tr>
            </table>
            
        </div>
    )
}
export default Bmi;