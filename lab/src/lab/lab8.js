import React from "react";
class View extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            s:[
                {
                    sno:'101',name:'raju',bname:'cse'
                },
                {
                    sno:'102',
                    name:'ravi',
                    bname:'cic'
                },
                {
                    sno:'103',
                    name:'bargav',
                    bname:'civil'
                },
                {
                    sno:'104',
                    name:'hari',
                    bname:'ece'
                }
            ]
        }

    }
   
    render()
    {
        
        return(
            <div>
                
        <table border='1'>
            {this.state.s.map((student)=>
            (               <tr key={student.id} >
                    <td>{student.sno}</td>
                    <td>{student.name}</td>
                    <td>{student.bname}</td>
                </tr>
            ))};
        </table>
        </div>
        )
    }
}

export default View;