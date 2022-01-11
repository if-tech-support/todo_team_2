import { Table, Tbody,Thead, Th, Tr, Td } from "@chakra-ui/react"

export default function TodosTable(){
  return (
    <Table size="md">
      <Thead bg="green.300">
        <Tr>
          <Th h={7} width="30%">Task</Th>
          <Th>Status</Th>
          <Th>Priority</Th>
          <Th>Create</Th>
          <Th>Update</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
        </Tr>
        <Tr>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
        </Tr>
        <Tr>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
          <Td>Test</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}