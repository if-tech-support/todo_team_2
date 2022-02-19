import React from 'react'
import { Tbody, Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { useRouter } from 'next/router'

const TodoListChild = () => {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  //ShowTodo遷移のためのRouterをセット
  const router = useRouter()

  return (
    <Tbody>
      {todos.map((todo) => (
        <Tr key={todo.id}>
          <Td
            fontSize="16px"
            fontWeight="bold"
            cursor="pointer"
            // ShowTodoへ遷移 & todoの中身を遷移先に渡す
            onClick={() => {
              router.push({
                pathname: 'ShowTodo',
                query: {
                  title: todo.title,
                  detail: todo.detail,
                  created_day: todo.created_day,
                },
              })
            }}
          >
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
            <EditIcon w={18} h={18} me={5} />
            <DeleteIcon w={18} h={18} />
          </Td>
        </Tr>
      ))}

    </Tbody>
  )
}

export default TodoListChild
