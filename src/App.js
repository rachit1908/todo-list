
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno

    if (todos.lenght == 0) {
      sno = 0;
    }
    else {
       sno = todos[todos.length - 1].sno + 1;
    }


    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go To Study",
      desc: "go to study fast"
    },
    {
      sno: 2,
      title: "Go To Market",
      desc: "go to Market fast"
    },
    {
      sno: 3,
      title: "Go To Mall"
    }
  ]);
  return (
    <>
    <Router>
      <Header title="TODO-LIST" searchBar={false} />
      <Switch>
          <Route path="/" render={()=>{
            return
            <>
            <Addtodo addtodo={addtodo} />s
      <Todos todos={todos} onDelete={onDelete} />
            </>
          }}>
            
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer />
      </Router>
    </>
  );
}

export default App;
