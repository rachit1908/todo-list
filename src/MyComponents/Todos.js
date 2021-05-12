import React from 'react'
import {Todo} from "../MyComponents/Todo";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3">TODOS LIST</h3> 
            {props.todos.length===0? "No todoos to display":
            props.todos.map((todo)=>{
                return <Todo todo={todo} onDelete={props.onDelete}/>
            })
            }
            
        </div>
    )
}
