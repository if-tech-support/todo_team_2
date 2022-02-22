import React from 'react'
import { Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../hooks/TodoState'
import { getTime } from '../../../utils/Now'

const TodoPriority = (props) => {
  const { id } = props
  const [todos, setTodos] = useRecoilState(todoState)
  const { currentTime } = getTime()

  const handleChange = (e) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            title: todo.title,
            detail: todo.detail,
            priority: e.target.value,
            status: todo.status,
            created_day: todo.created_day,
            updated_day: currentTime,
          }
        : todo
    )
    setTodos(newTodos)
  }

  return (
    <>
      <Select
        id="topSelectBox"
        onChange={handleChange}
        borderColor="tomato"
        fontSize="16px"
      >
        <option value="High">High</option>
        <option value="Middle">Middle</option>
        <option value="Low">Low</option>
      </Select>
    </>
  )
}

export default TodoPriority
