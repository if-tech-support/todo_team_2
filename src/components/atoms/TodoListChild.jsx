import React, { useState, useEffect } from 'react'
import { Tbody, Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'

const TodoListChild = () => {
  const [todos, setTodos] = useRecoilState(todoState)
  // const [status, setStatus] = useState(0)
  console.log('recoil=', todos)

  // console.log('@@@ans=', ans)
  // const statuses = ['NOT STARTED', 'DOING', 'DONE']
  const handleTodoStatus = (index) => {
    console.log('index=', index)

    console.log('todos=', todos[index])

    const switchTodoStatus = [...todos]
    if (switchTodoStatus[index].status === 'NOT STARTED') {
      switchTodoStatus[index].status === 'DOING'
    } else if (switchTodoStatus[index].status === 'DOING') {
      switchTodoStatus[index].status === 'DONE'
    } else if (switchTodoStatus[index].status === 'DONE') {
      switchTodoStatus[index].status === 'NOT STARTED'
    }
    setTodos(switchTodoStatus)

    // let ans = 0
    // ans = status + 1
    // if (ans > 2) {
    //   ans = 0
    // }
    // setStatus(ans)

    // console.log(ans)
    // console.log('statuses=', statuses[ans])
    // const changeStatus = statuses[ans]
    // console.log(changeStatus)
    // setStatus(changeStatus)

    // ans = ans + 1
    // if (ans > 2) {
    //   ans = 0
    // }
    // setTodos.status
  }

  // console.log('@@@status=', status)

  // useEffect(() => {
  //   setStatus(statuses[ans])
  // }, [statuses[ans]])

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
              bg="green.50"
              size="lg"
              fontSize="12px"
              onClick={() => {
                handleTodoStatus(index)
              }}
            >
              {todo.status}
              {/* {statuses[status]} */}
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
