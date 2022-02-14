import React, { useCallback } from 'react'
import { Select } from '@chakra-ui/react'
import { useRecoilCallback } from 'recoil'
import { todoState } from '../../../hooks/TodoState'

const TodoPriority = (props) => {
  const { id, priority } = props
  //atomにセレクトボックスで選んだ時の値をsetする
  const updateTodo = useRecoilCallback(({ set }) =>
    (id, priority) => {
      set(todoState, (todoOld) => todoOld.map(
        todoOld => todoOld.id === id
        ? { ...todoOld, priority }
        : t))
    }
  )
  const handleChange = useCallback(
    (e) => updateTodo(
      id, e.target.value
      ),
      [priority])

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

