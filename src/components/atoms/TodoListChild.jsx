import React from 'react'
import { Tbody, Tr, Td, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { todoState } from '../../hooks/TodoState'
import { useRecoilState } from 'recoil'

import TodoStatus from '../atoms/status/todoStatus'
import TodoPriority from './status/TodoPriority'

const TodoListChild = () => {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  return (
    <Tbody>
      {todos.map((todo, index) => (
        <Tr key={todo.id}>
          <Td fontSize="16px" fontWeight="bold">
            {todo.title}
          </Td>
          <Td>
            <TodoStatus status={todo.status} />
          </Td>
          <Td>
            <TodoPriority id={todo.id} priority={todo.priority} />
          </Td>
          <Td fontSize="14px">{todo.created_day}</Td>
          <Td fontSize="14px">2020-11-8 18:55</Td>
          <Td>
            <EditIcon w={18} h={18} me={5} />
            <DeleteIcon w={18} h={18} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TodoListChild
