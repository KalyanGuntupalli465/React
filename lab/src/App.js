import ViewItems from './lab/lab10';
import DigiClock from './lab/lab12';
import Bmi from './lab/lab14';
import CounterDemo from './lab/lab6';
import TextColorDemo from './lab/lab7';
import View from './lab/lab8';
import DigitalClock from './lab/lab9';
import Test1 from './prac/test1';
import Test2 from './prac/test2';
import React from 'react';
import Display from './lab/lab13';

import Emi from './lab/lab17';
import HotelBillDemo from './lab/lab18';
import ImageGridDemo from './lab/lab15';
// import BlogContextDemo from './lab/lab11';
// const blogInfo = {
//   React: {
//     post: "Learn useContext Hooks",
//     author: "Varun K"
//   },                                 //for useContext lab11             
//   NodeJS: {
//     post: "Node Commands",
//     author: "Veena M"
//   }
// };

// export const BlogContext  = React.createContext(blogInfo);
function App() {
  return (
    <div className="App">
<h1>hello I ams</h1>
{/* <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />                          //for useContext lab11
      </BlogContext.Provider> */}
      {/* <Test1/>
      <CounterDemo/>
      <TextColorDemo/>
      <Test2 />
      <DigitalClock /> */}
      
      {/* <View/>
      <ViewItems />
      <DigiClock /> */}
      {/* <Bmi /> */}
      {/* <Display /> */}
      <ViewItems />
      
      {/* <Emi /> */}
      <HotelBillDemo/>  
      <ImageGridDemo/>  </div>
  );
}

export default App;
