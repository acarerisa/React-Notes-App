import React, { useState } from "react";
import axios from 'axios';

export default function CreateNote() {
    const [input,setInput] = useState({
        title:"",
        content:""
    })

    const handleTitle = (e)=>{
        setInput(prevInput =>{
            return(
                {...prevInput,title:e.target.value}
            )
        })
    }
    const handleContent = (e)=>{
        setInput(prevInput =>{
            return(
                {...prevInput,content:e.target.value}
            )
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        const newNote = {
          title:input.title,
          content:input.content
        }
        axios.post('http://localhost:3001/create', newNote)
    }

  return (
    <div className="container">
      <h1>Create Note</h1>
      <form>
        <div className="form-group mt-3">
          <input
          value={input.title}
            onChange={handleTitle}
            name="title"
            type="text"
            autoComplete="off"
            className="form-control"
            placeholder="note title..."
          />
        </div>
        <div className="form-group mt-3">
          <textarea
          value={input.content}
          onChange={handleContent}
            name="content"
            className="form-control"
            autoComplete="off"
            placeholder="note content..."
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-primary mt-3">Add Note</button>
      </form>
    </div>
  );
}
