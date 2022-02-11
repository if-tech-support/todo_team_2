import { Table, Tbody, Thead, Th, Tr, Td } from '@chakra-ui/react'
import TodoListChild from '../../atoms/TodoListChild'
import { useRecoilState } from "recoil";
import { todoState } from '../../../hooks/TodoState';



export default function TodosTable() {
  const [todos, setTodos] = useRecoilState(todoState);
  console.log(typeof(todos));
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
        {todos.map((todo, index) => {
          if(todo.position == 'active'){
            return(
  
            <TodoListChild 
            key={index}
            id={todo.id}
            status={todo.status}
            created_day={todo.createdAt}
            title={todo.title}
            />
            )
          }
          })
        }
      </Tbody>
    </Table>
  )
}
