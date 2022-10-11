import React from 'react'
import { useState } from 'react'
import "./list.css"

const Todo = () => {
 
const[input,setinput]=useState("");
const [lists,setlist]=useState([])

const additem=()=>{
    const data={id:new Date().toLocaleString(),value:input}
    setlist([...lists,data])
    setinput("")
}
const todelete=(ele)=>{
    const idx= lists.findIndex((e)=>{ return e.id==ele})
 lists.splice(idx,1)
    setlist([...lists])
}

const toedit=(ele)=>{
    const idx= lists.findIndex((e)=>{ return e.id==ele})
    setinput(lists[idx].value)
    lists.splice(idx,1)
}
const competed=(ele)=>{
     const idx= lists.findIndex((e)=>{ return e.id==ele}) 
     
}
    return(
        <div id="to-do-container">
            <div id='todo-heading'>
            <p>My To-Do List</p>
            <i className="fa fa-check-square-o" aria-hidden="true" ></i>
            </div>
            <div id='input-box'>
            <input type="text" value={input} placeholder='Add your task..'onChange={(event)=>{setinput(event.target.value)}}/>
            <button onClick={additem}>ADD</button>
            </div>
            {lists.map((list,index)=>{
                console.log(list)
                return(
                    <div id='list-box' key={list.id}>
                        <p>{list.value}</p>
                        <button id='delete-btn'
                        onClick={()=>{todelete(list.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></button>

                        <button id='edit-btn'
                        onClick={()=>{toedit(list.id)}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>

                        <button id='complete-btn'
                        onClick={()=>{competed(list.id)}}><i className="fa fa-check" aria-hidden="true"></i></button>
                    </div>
                    
                )
            })}

            
        </div>
        
        
    )
}

export default Todo