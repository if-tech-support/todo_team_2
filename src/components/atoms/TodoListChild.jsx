import React from 'react'
import { Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'

const TodoListChild = (props) => {
  const {id, status, createdAt, title} = props;


  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  
  // 選択されたtodoTaskをゴミ箱に移動するメソッドを宣言
  const onClickTrash = (todoId) => {
    // todos内で押下されたTodoのidが同じものを抽出し、statusを更新
    // idを元にtodosのオブジェクトを取得
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        // statusをnot_activeに変更
        todo = {...todo, position:'not_active'};
      }
      return todo;
    })
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
          <option>High</option>
          <option>Middle</option>
          <option>Low</option>
        </Select>
      </Td>
      <Td fontSize="14px">{createdAt}</Td>
      <Td fontSize="14px">2020-11-8 18:55</Td>
      <Td>
        <EditIcon w={18} h={18} me={5} />
        <DeleteIcon w={18} h={18} cursor={"pointer"} onClick={() => onClickTrash(id)}/>
      </Td>
    </Tr>
  )
}

export default TodoListChild
