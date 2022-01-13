import React from 'react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Select,

} from '@chakra-ui/react'

const TodoTableChild = () => {
  return (
  <Table>
    <Tbody>
      <Tr>
        <Td fontWeight="bold">Github上に静的サイトをホスティングする</Td>
        <Td>
        <Button rounded="full" bg="green.50" size="lg">NOT STARTED</Button>
        </Td>
        <Td>
          <Select borderColor="tomato">
            <option>High</option>
            <option>Middle</option>
            <option>Low</option>
          </Select>
        </Td>
        <Td>2020-11-8 18:55</Td>
        <Td>2020-11-8 18:55</Td>
        <Td></Td>
      </Tr>
    </Tbody>
  </Table>
  )
}

export default TodoTableChild