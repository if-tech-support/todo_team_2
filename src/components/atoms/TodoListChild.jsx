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
    <Tr key={id}>
      <Td fontSize="16px" fontWeight="bold">
        {title}
      </Td>
      <Td>
        <Button rounded="full" bg="green.50" size="lg" fontSize="12px">
          {status}
        </Button>
      </Td>
      <Td>
        <Select borderColor="tomato" fontSize="16px">
          <option value="High">High</option>
          <option value="Middle">Middle</option>
          <option value="Low">Low</option>
        </Select>
      </Td>
      <Td fontSize="14px">{created_day}</Td>
      <Td fontSize="14px">{updated_day}</Td>
      <Td>
        <EditIcon w={18} h={18} me={5} />
        {/* Todoをゴミ箱に移動するメソッドを呼び出し */}
        <DeleteIcon w={18} h={18} cursor={"pointer"} onClick={() => onClickTrash(id)}/>
      </Td>
    </Tr>
  )
}

export default TodoListChild
