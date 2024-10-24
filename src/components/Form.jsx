import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addtodo} from '../features/todo/todoSclice'

const Form = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  

  const dispatch=useDispatch()
const submit=(e)=>
{
e.preventDefault()
dispatch(addtodo({title,description}))
setTitle("")
setDescription("")
}
  return (
   
    <>
    <div className="container mt-5 d-flex justify-content-center mb-3">
  <form className="border border-primary p-4 rounded" onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" required />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} rows="3" placeholder="Enter description" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>


    </>
  )
}

export default Form
