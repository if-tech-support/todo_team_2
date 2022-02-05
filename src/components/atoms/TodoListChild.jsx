import React from 'react'
import { useRouter } from 'next/router'
import { Tbody, Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { editTodoState } from '../../hooks/EditTodoState'

const TodoListChild = () => {
  const router = useRouter()
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  // EditTodoState.jsで定義したeditTodoの状態を更新するための関数を呼び出す
  const setEditTodo = useSetRecoilState(editTodoState)

  const handleClickEdit = (selectedTodo) => {
    setEditTodo(selectedTodo)
    router.push('/EditTodo')
  }
  return (
    <Tbody>
      {todos.map((todo) => (
        <Tr key={todo.id}>
          <Td fontSize="16px" fontWeight="bold">
            {todo.title}
          </Td>
          <Td>
            <Button rounded="full" bg="green.50" size="lg" fontSize="12px">
              {todo.status}
            </Button>
          </Td>
          <Td>
            <Select borderColor="tomato" fontSize="16px">
              <option>High</option>
              <option>Middle</option>
              <option>Low</option>
            </Select>
          </Td>
          <Td fontSize="14px">{todo.created_day}</Td>
          <Td fontSize="14px">2020-11-8 18:55</Td>
          <Td>
            <EditIcon
              onClick={(e) => handleClickEdit(todo)}
              w={18}
              h={18}
              me={5}
            />
            <DeleteIcon w={18} h={18} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TodoListChild
