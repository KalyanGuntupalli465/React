import React, { useEffect, useState } from "react";
import axios from 'axios';
const Display=()=>
{
const [data,setData]=useState([]);
const [title,setTitle]=useState([]);
useEffect(()=>
{
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>{setData(res.data);})
.catch(err=>{console.log(err);});


fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((res)=>setTitle(res))
.catch((err)=>console.log(err))
},[]);
return(
    <div>
<h1>data fetching</h1>
<table border="1">
    <tr>
        <td> {data.map((d)=>(<p>{d.id}</p>))}</td>
        <td> {title.map((p)=>(<p>{p.title}</p>))}</td>
        
    </tr>
</table>
    </div>
)
}
export default Display;