import React from 'react'
import { Tbody, Tr, Td, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { todoStatus } from '../atoms/status/todoStatus'
import TodoPriority from './status/TodoPriority'

const TodoListChild = () => {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // ステータスボタンをクリックしたら、Statusが変わります
  const handleTodoStatus = (index) => {
    const switchTodoStatus = JSON.parse(JSON.stringify(todos))
    if (switchTodoStatus[index].status === 'NOT STARTED') {
      switchTodoStatus[index].status = 'DOING'
    } else if (switchTodoStatus[index].status === 'DOING') {
      switchTodoStatus[index].status = 'DONE'
    } else if (switchTodoStatus[index].status === 'DONE') {
      switchTodoStatus[index].status = 'NOT STARTED'
    }

    setTodos(switchTodoStatus)
  }

  // ステータスによってボタンの背景色が変更
  const bgColor = (status) => {
    if (status === 'NOT STARTED') {
      return 'green.50'
    } else if (status === 'DOING') {
      return 'green.600'
    } else if (status === 'DONE') {
      return 'green.300'
    }
  }
  // ステータスによってボタンのテキスト色が変更
  const textColor = (status) => {
    if (status === 'NOT STARTED') {
      return 'black'
    } else if (status === 'DOING') {
      return 'white'
    } else if (status === 'DONE') {
      return 'black'
    }
  }

  return (
    <Tbody>
      {todos.map((todo, index) => (
        <Tr key={todo.id}>
          <Td fontSize="16px" fontWeight="bold">
            {todo.title}
          </Td>
          <Td>
            <Button
              rounded="full"
              bg={bgColor(todo.status)}
              color={textColor(todo.status)}
              size="lg"
              fontSize="12px"
              _hover={{ opacity: 0.8 }}
              onClick={() => handleTodoStatus(index)}
            >
              {todo.status}
            </Button>
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
