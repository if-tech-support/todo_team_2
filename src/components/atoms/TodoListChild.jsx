import React from 'react'
import { Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'

const TodoListChild = (props) => {
  // TodoTableより引き渡されたpropsを展開
  const {id, status, created_day, updated_day, title} = props;

  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // 選択されたtodoTaskをゴミ箱に移動するメソッドを宣言
  // 引数　：ID、戻り値：無し
  const onClickTrash = (todoId) => {
    // todos内で押下されたTodoのidと等しくないものを抽出し定数に代入
    const newTodos = todos.filter((todo) =>
      todo.id !== todoId
    )
    // Todosを更新するメソッドを呼び出し、上述の処理結果で更新
    setTodos(newTodos);
  }
  return (
    <Tbody>
      {curItems.map((curItem) => (
        <Tr key={curItem.id}>
          <Td fontSize="16px" fontWeight="bold">
            {curItem.title}
          </Td>
          <Td>
            <Button rounded="full" bg="green.50" size="lg" fontSize="12px">
              {curItem.status}
            </Button>
          </Td>
          <Td>
            <Select borderColor="tomato" fontSize="16px">
              <option>High</option>
              <option>Middle</option>
              <option>Low</option>
            </Select>
          </Td>
          <Td fontSize="14px">{curItem.created_day}</Td>
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
