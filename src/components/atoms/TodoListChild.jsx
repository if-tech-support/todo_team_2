import React from 'react'
import { useRouter } from 'next/router'
import { Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { editTodoState } from '../../hooks/EditTodoState'
import TodoPriority from './status/TodoPriority'

const TodoListChild = (props) => {
  // TodoTableより引き渡されたpropsを展開
  const { id, status, priority, created_day, updated_day, title, todo } = props
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  // 必要な情報を持って画面遷移するためにuseRouterを使用
  const router = useRouter()
  // EditTodoState.jsで定義したeditTodoの状態を更新するための関数を呼び出す
  const setEditTodo = useSetRecoilState(editTodoState)

  // 選択されたtodoTaskをゴミ箱に移動するメソッドを宣言
  // 引数　：ID、戻り値：無し
  const onClickTrash = (todoId) => {
    // todos内で押下されたTodoのidと等しくないものを抽出し定数に代入
    const newTodos = todos.filter((todo) => todo.id !== todoId)
    // Todosを更新するメソッドを呼び出し、上述の処理結果で更新
    setTodos(newTodos)
  }

  const handleClickEdit = (selectedTodo) => {
    setEditTodo(selectedTodo)
    router.push('/EditTodo')
  }

  const handleClickDetail = () => {
    router.push({
      pathname: 'ShowTodo',
      query: { id: id },
    })
  }

  // ステータスボタンをクリックしたら、Statusが変わります
  const handleTodoStatus = (id) => {
    const switchTodoStatus = JSON.parse(JSON.stringify(todos))

    // findIndexでtodoのidがhandleTodoStatusに渡したidと一致するか探す
    const calculatedId = todos.findIndex((todo) => todo.id === id)

    if (switchTodoStatus[calculatedId].status === 'NOT STARTED') {
      switchTodoStatus[calculatedId].status = 'DOING'
    } else if (switchTodoStatus[calculatedId].status === 'DOING') {
      switchTodoStatus[calculatedId].status = 'DONE'
    } else if (switchTodoStatus[calculatedId].status === 'DONE') {
      switchTodoStatus[calculatedId].status = 'NOT STARTED'
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
    <Tr key={id}>
      <Td
        fontSize="16px"
        fontWeight="bold"
        cursor={'pointer'}
        onClick={handleClickDetail}
      >
        {title}
      </Td>
      <Td>
        <Button
          rounded="full"
          bg={bgColor(status)}
          color={textColor(status)}
          size="lg"
          fontSize="12px"
          _hover={{ opacity: 0.8 }}
          onClick={() => handleTodoStatus(id)}
        >
          {status}
        </Button>
      </Td>
      <Td>
        <TodoPriority id={id} priority={priority} />
      </Td>
      <Td fontSize="14px">{created_day}</Td>
      <Td fontSize="14px">{updated_day}</Td>
      <Td>
        <EditIcon
          w={18}
          h={18}
          me={5}
          cursor={'pointer'}
          onClick={() => handleClickEdit(todo)}
        />
        {/* Todoをゴミ箱に移動するメソッドを呼び出し */}
        <DeleteIcon
          w={18}
          h={18}
          cursor={'pointer'}
          onClick={() => onClickTrash(id)}
        />
      </Td>
    </Tr>
  )
}

export default TodoListChild
