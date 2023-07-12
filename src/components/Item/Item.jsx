import React, { useState, useEffect } from 'react'
import './style.scss'
import { useDispatch } from 'react-redux'
import { del, cheked, edit } from '../../redusers/reduser'
import {
  AiOutlineBorder,
  AiOutlineDownSquare,
  AiFillDelete,
  AiFillEdit,
  AiOutlinePlus,
} from 'react-icons/ai'

export const Item = ({ todo, id }) => {
  const [inputvalue, setInputValue] = useState()
  const [isEdit, setIsEdit] = useState(true)
  const dispach = useDispatch()

  useEffect(() => {
    setInputValue(todo)
  }, [todo])
  const chekedTodo = () => dispach(cheked(id))
  const deleteTodo = () => dispach(del(id))
  const editTodo = () => {
    dispach(edit(inputvalue))
    setIsEdit(isEdit)
  }
  const inputChanged = (e) => setInputValue(e.target.value)
  return (
    <div className={`item_container ${todo.cheked ? 'input_cheked' : ''}`}>
      {todo.cheked ? (
        <AiOutlineDownSquare onClick={chekedTodo} />
      ) : (
        <AiOutlineBorder onClick={chekedTodo} />
      )}

      <input
        className="item_input "
        type="text"
        value={inputvalue?.task}
        onChange={inputChanged}
        disabled={isEdit && !todo.cheked}
      />
      <AiFillDelete onClick={deleteTodo} />

      {isEdit || !todo.cheke ? (
        <AiFillEdit onClick={() => setIsEdit(!isEdit)} />
      ) : (
        <AiOutlinePlus onClick={editTodo} />
      )}
    </div>
  )
}
