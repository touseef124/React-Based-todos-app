// import React from 'react';
// import { render } from 'react-dom';
// import './App.css';
  
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//         todos:['alam','ali'],
//         value:""
//     }
//   }
//   additem=()=>{
//     this.state.todos.push(this.state.value);
//     this.setState({
//       todos:this.state.todos,
//       value:""
//     })
//   }
//   render(){
    
//     return(
//       <div>
//         <input value={this.state.value}  onChange={(e)=>{this.setState({value:e.target.value})}} type="text" placeholder="Enter value"/>
//         <button onClick={this.additem}>Add Item</button>
//         {this.state.todos.map((v,i)=>{
//           return <li key={i}>{v}</li>
//         })}
//       </div>
//     )
//   }
// }
  


// export default App;
import React from 'react';
import firebase from './firebase';

class App extends React.Component{
  constructor(){
    super()
    // all new todo item will be saved in empty array todos
    this.state={
      todos:[],
      // this value is defined to get value given in input tag
      value:'',
      updatevalue:""
    }
  }
  // when this function is called using button this function pushes the entred value (saved in this.state.value)
  // to the todos array using push() then to re-run render we are calling setState() 
  // Method that run the map() method and allows all values present in todos[]
  // to be print on screen
  additem=()=>{
    console.log(this.state.value)
    let obj={title:this.state.value,edit:false}
    {this.state.value!==""? this.state.todos.push(obj) : alert("Input Is Enpmty")}
    console.log("object data>==>",obj)
    firebase.database().ref('/').child('todos').push(obj)
    this.setState({
      value:"",
    })
  }
  updatevalue=(index)=>{
    this.state.todos[index].edit=false;
    console.log(this.state.updatevalue)
    {this.state.updatevalue!==""? this.state.todos[index].title=this.state.updatevalue : alert("Input Is Enpmty")}
    
    this.setState({
      updatevalue:"",
    })
  }
  removeitem=(index)=>{
  console.log(index)
  this.state.todos.splice(index,1);
  this.setState({
    todos:this.state.todos
  })  
  }
  edititem=(index)=>{
    this.state.todos[index].edit=true;
    this.setState({
      todos:this.state.todos
    })
  }
  render(){
    return(
      <div>
        {/* value input goes and save in 'value' property of state by using event onChange */}
        <input /*this value is used to empty the input tage after buttoon is pressed*/
        value={this.state.value} type="text" placeholder="Enter Value" onChange={(e)=>this.setState({value:e.target.value})} />
        <button onClick={this.additem}>Add Item</button>

        {/* map function that print each value in todos */}
        {this.state.todos.map((v,i)=>{
          return <li key={i}>
            {v.edit? <input value={this.state.updatevalue} placeholder={this.state.todos[i].title} type="text"
             onChange={(e)=>this.setState({updatevalue:e.target.value})}/> : v.title}
          {v.edit? <button onClick={()=>this.updatevalue(i)}>Update</button> :
           <button onClick={()=>this.edititem(i)}>Edit</button>
          }
           <button onClick={()=>this.removeitem(i)}>Delete</button>
        </li>
          })}
        {console.log(this.state.todos)}
      </div>
    )
  }
  }

export default App;