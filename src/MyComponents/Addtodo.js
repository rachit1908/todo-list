import React from 'react'
import { useState } from 'react';

export const Addtodo = (props) => {
    const [title,settitle]= useState("");
    const [desc,setdesc]= useState("");
    const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc)
            {
                alert("Title or description cannot be blank");
            }
            props.addtodo(title,desc);
    }
    return (
        <div className="container my-3">
            <h3>ADD A TODO</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlhtmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                        
  </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo description</label>
                        <input type="desc" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
                     
                            <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
                    </div>
    )
}
