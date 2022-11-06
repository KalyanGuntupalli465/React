import React, { useState } from "react";
import { TextField,Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";


const Emi=()=>
{
    const [loan,setLoan]=useState();
    let [tenure,setTenure]=useState();
    const [time,setTime]=useState("");
    const [interest,setInterest]=useState();
    const [res,setRes]=useState();
    const cal=()=>
    {
        console.log("hiiiiii");
        if(time==="years"){
            tenure=tenure*12;
        }
        var em = loan * interest * ((Math.pow((1+interest),tenure)/(Math.pow((1+interest),interest)-1)));
        setRes(em);
    }
    const abor=()=>
    {
        setLoan(0);

        setTenure(0);
        setTime("");
        setInterest(0);
    }

    return(
        <div>
            <table cellSpacing="25px">
                <tr>
                    <td>enter loan amount</td>
          <td>  <TextField variant="standard" id="standard-basic" label="enter loan amount" value={loan} onChange={(e)=>{setLoan(e.target.value);}} /></td>
            </tr>
            <tr>
                <td>enter loan tenure</td>
           <td> <TextField variant="standard" id="standard-basic" label="enter loan tenure" value={tenure}  onChange={(e)=>{setTenure(e.target.value);}} /><br /></td>
            </tr>
            <tr>
                <td></td>
                <td>
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Time</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={time}
    label="Time"
    onChange={(e)=>{setTime(e.target.value)}}>
  <MenuItem  value="months">Months</MenuItem>
    <MenuItem value="years">Years</MenuItem>
  
  </Select>
</FormControl>
                </td>
</tr>
<tr>
                <td>enter interest</td>
           <td> <TextField variant="standard" id="standard-basic" label="enter interest" value={interest} onChange={(e)=>{setInterest(e.target.value);}} /><br /></td>
            </tr>
            <tr>
                <td><Button variant="outlined" onClick={abor}>cancel</Button> </td>
                <td><Button variant="outlined" onClick={cal}>submit</Button> </td>
            </tr>
            </table>
            <h1>{res}</h1>
        </div>
    )
}
export default Emi;


{/* <select name="tenureType" id="tenureType" onChange={(e)=>{setSelectType(e.target.value);}}>
<option value="" disabled="disabled" selected="hidden">select</option>
<option value="Months">Months</option>
<option value="Years">Years</option>
</select> */}