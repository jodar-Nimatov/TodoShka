import React from 'react'
import trash from './assets/trash.png'

const ToDo = ({ todo, removeTask}) => {
  return (
    <div key={todo.id} className='item-todo'>
        <div className='item-text'>
            {todo.task}
        </div>
        <div className='item-delete' onClick={() => removeTask(todo.id)}>
        <img src={trash} alt="" className='img-delete'/>
        </div>
    </div>
  )
}

export default ToDo