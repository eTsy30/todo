import './style.scss'
import { useEffect, useRef, useState, useMemo } from 'react'
import { Item } from '../Item/Item'
import { useSelector } from 'react-redux'
import { ElementDecor } from '../elementDecor/elementDecor'
import { CreateTodo } from '../CreateTodo/CreateTodo'

const SCREEN_DIVIDER = 100

export const MainList = () => {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const listTodos = useSelector((state) => state.todosData.todos)
  const arrayResult = useMemo(() => [...Array(width)], [width])

  useEffect(() => {
    const countBrush = Math.round(ref.current.clientWidth / SCREEN_DIVIDER)
    setWidth(countBrush)
  })

  return (
    <main ref={ref} className="mainList_container" id="container">
      <header className="mainList_header">
        {arrayResult.map((item, index) => (
          <ElementDecor key={index} />
        ))}
      </header>
      {listTodos.map((todo) => (
        <Item key={todo.id} todo={todo} id={todo.id} />
      ))}
      <CreateTodo />
      <footer className="mainList_footer"></footer>
    </main>
  )
}
