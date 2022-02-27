import React from 'react'
import { Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../hooks/TodoState'

const TodoPriority = (props) => {
  const { id, priority } = props

  const [todos, setTodos] = useRecoilState(todoState)

  const handleChange = (e) => {
  const newTodos = [...todos].map((todo) =>
  todo.id === id ? { ...todo, priority: e.target.value } : todo
  )
  setTodos(() => newTodos)
  }

  return (
    <>
      <Select
        value={priority}
        id="topSelectBox"
        onChange={handleChange}
        borderColor="tomato"
        fontSize="16px">
        <option
          value="High"
        >
          High
        </option>
        <option
          value="Middle"
        >
          Middle
        </option>
        <option
          value="Low"
        >
          Low
        </option>
      </Select>
    </>
  )
}

export default TodoPriority
