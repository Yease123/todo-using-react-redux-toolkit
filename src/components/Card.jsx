import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completedtodo, edittodo,deletetodo } from '../features/todo/todoSclice'
const Card = () => {
  const [isediting,setisediting]=useState(false)
  const [des,setdes]=useState("")
  const [editid,seteditid]=useState(null)
  const cards = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const complete = (id) => {
    dispatch(completedtodo(id))
  }
  const editcard=(id,description)=>
  {
setisediting(!isediting)
seteditid(id)
setdes(description)
console.log(isediting)
if(isediting)
{
  console.log("hi")
  dispatch(edittodo({editid,des}))
}
  }
const deletecard=(id)=>
{
dispatch(deletetodo({id}))
}
  return (
    <>
      {
        cards.map((card) => (
          <div className="container" key={card.id}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    {card.completed === false ?
                      <>
                        <h5 className="card-title">{card.title}</h5>
                        <input className="form-control mb-3" disabled={(!isediting || card.id!==editid)}
                         value={isediting===false || card.id!==editid?`${card.description}`:`${des}`} 
                         onChange={(e)=>setdes(e.target.value)}
                          />
                        <button className="btn btn-success me-2" onClick={() => complete(card.id)}>Completed</button>
                      </> :
                      <s>
                        <h5 className="card-title">{card.title}</h5>
                        <input className="form-control mb-3" disabled value={card.description} />
                        <button className="btn btn-success me-2" onClick={() => complete(card.id)}><s>Completed</s></button>
                      </s>
                    }

                  
                    <button className="btn btn-danger me-2" onClick={()=>deletecard(card.id)}>Delete</button>
                    <button className="btn btn-primary" disabled={card.completed} onClick={()=>editcard(card.id,card.description)}>
                      {isediting===true && card.id===editid && card.completed===false?"Save":"Edit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Card
