import React from "react";
import "./App.css";
function RenderingArrayOfObjects() {
 const studentlist = [
 {
 id: "501",
 name: "Rajesh",
 course:"B.TEch",
 },
 {
 id: "502",
 name: "Venkatesh",
 course:"B.TEch",
 },
 {
 id: "503",
 name: "Ramesh",
 course:"B.TEch",
 },
 {
 id: "504",
 name: "Suresh",
 course:"B.TEch",
 },
 {
 id: "505",
 name: "Kumar",
 course:"B.TEch",
},
 ];
 const list = studentlist.map((element) => {
 return (

 <tr className="students" align="center">
 <td>{element.id}</td>
 <td>{element.name}</td>
 <td>{element.course}</td>
 </tr>
 );
 });
 /*return <div className="container">{listItems}</div>;
}*/
return (
 <div>
 <table align="center" border="1">
 <thead>
 <tr>
 <th> Id</th>
 <th>Name</th>
 <th>Course</th>
 </tr>
 </thead>
 <tbody>{list}</tbody>
 </table>
 </div>
);
}
function App() {
 return (
 <div className="App">
 <div>
 <h1 className="Students">Student List</h1>
 <br></br>
 <RenderingArrayOfObjects />
 </div>
 </div>
 );
}
export default App;
