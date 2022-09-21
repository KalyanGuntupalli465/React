import React, { Component } from 'react';

class Test1 extends Component {
  
//   constructor(props) {
//     super(props);
//     this.sayHello = this.sayHello.bind(this);
//   }

sayHello() {
    alert('Hello!');
  }
render() {
  return (
   <div> <button onClick={this.sayHello}>
      Click me!
    </button> </div>
  );
}
};

export default Test1;