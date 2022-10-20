import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
const Bmi=()=>
    
{
    const [h,setH]=useState();
    const [w,setW]=useState();
    const [res,setRes]=useState("");

    const meas=()=>
    {
        var g=h*h;
        var k=w/g;
        if(k<16){
            setRes("severe thickness");
        }
        else if(k>16 && k<=17)
        {
            setRes("MOderate thickness");
        }
        else if(k>17 && k<=18.5)
        {
            setRes("Mild thickness");
        }
        else if(k<18.5 && k<=25)
        {
            setRes("Normal");
        }
        else if(k>25 && k<=30)
        {
            setRes("over weight");
        }
        else if(k>30 && k<=35)
        {
            setRes("obesse 1");
        }
        else if(k>35 && k<=40)
        {
            setRes("obesse 2");
        }
        else if(k>40)
        {
            setRes("obesse3");
        }

    }
    return(
        <div className="b1">
            <table><tr>
            <TextField id="standard-basic" label="enter height in m" type="number" variant="standard"  name="h" value={h} onChange={(e)=>{setH(e.target.value);}} /></tr>
           <tr>  <TextField id="standard-basic" label="enter weight in kgs" type="number" variant="standard" name="w" value={w} onChange={(e)=>{setW(e.target.value);}} /></tr>
            <tr> <Button variant="outlined" onClick={meas}>Measure</Button></tr>
            </table>
            <h1>{res}</h1>
            
        </div>
    )
}
export default Bmi;