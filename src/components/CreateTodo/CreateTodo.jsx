import React, { useState } from 'react'
import './style.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { add } from '../../redusers/reduser'
export const CreateTodo = () => {
  const [toggleActive, setToggleActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispach = useDispatch()
  const toggele = () => setToggleActive(!toggleActive)
  const handleChange = (e) => setInputValue(e.target.value)
  const addTack = () => {
    dispach(add(inputValue))
    setInputValue('')
    toggele()
  }
  return (
    <div className="createTodo_container">
      {toggleActive ? (
        <div className="input_wrapper">
          <input
            className="createTodo_input"
            type="text"
            value={inputValue}
            placeholder="Добавить задачу"
            onChange={handleChange}
          />{' '}
          <AiOutlinePlus onClick={addTack} />
        </div>
      ) : (
        <AiOutlinePlus onClick={toggele} />
      )}
    </div>
  )
}
