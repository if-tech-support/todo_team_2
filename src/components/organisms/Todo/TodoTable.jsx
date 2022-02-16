import { Table, Tbody, Thead, Th, Tr, Td } from '@chakra-ui/react'
import TodoListChild from '../../atoms/TodoListChild'
import { useRecoilValue } from "recoil";
import { todoState } from '../../../hooks/TodoState';



export default function TodosTable() {
  // todosに格納されている値のみを参照
  const todos = useRecoilValue(todoState);
  return (
    <Table size="md">
      <Thead bg="green.300">
        <Tr>
          <Th width="30%">Task</Th>
          <Th>Status</Th>
          <Th>Priority</Th>
          <Th>Create</Th>
          <Th>Update</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          // useRecoilValueで呼び出したtodos内のtodoを順に取り出し処理を行う。
          todos.map((todo, index) => {
            return(
            <TodoListChild
            id={todo.id}
            status={todo.status}
            created_day={todo.created_day}
            updated_day={todo.updated_day}
            title={todo.title}
            />
            )
          })
        }
      </Tbody>
    </Table>
  )
}
