import { Table, Tbody, Thead, Th, Tr, Td } from '@chakra-ui/react'
import TodoListChild from '../../atoms/TodoListChild'

export default function TodoTable() {
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

      <TodoListChild />
    </Table>
  )
}
