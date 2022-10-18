import React from "react";
class Test2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:4};
    }
     componentDidMount(){
       
      var interval= setInterval(()=>
       {
        let b=this.state.count;
        
        this.setState({count:b-1})
        if(this.state.count===0 )
        {
            alert("duck");
            
            clearInterval(interval);
            this.setState({count:0})
            }
       },1000)
       
     }
     
     

    render()
    {
        return(
            <div>count:{this.state.count}</div>
        )
    }
}
export default Test2;