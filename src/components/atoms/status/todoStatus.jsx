import React from 'react'
import { Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

import { todoState } from '../../../hooks/TodoState'

const TodoStatus = (todo, index) => {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  console.log(todos)

  // ステータスボタンをクリックしたら、Statusが変わります
  const handleTodoStatus = () => {
    const switchTodoStatus = JSON.parse(JSON.stringify(todos))
    if (switchTodoStatus[index].status === 'NOT STARTED') {
      switchTodoStatus[index].status = 'DOING'
    } else if (switchTodoStatus[index].status === 'DOING') {
      switchTodoStatus[index].status = 'DONE'
    } else if (switchTodoStatus[index].status === 'DONE') {
      switchTodoStatus[index].status = 'NOT STARTED'
    }
    console.log(todo.status)

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
    <>
      <Button
        rounded="full"
        bg={bgColor(todo.status)}
        color={textColor(todo.status)}
        size="lg"
        fontSize="12px"
        _hover={{ opacity: 0.8 }}
        onClick={(status) => handleTodoStatus(index, status)}
      >
        {todo.status}
      </Button>
    </>
  )
}

export default TodoStatus
