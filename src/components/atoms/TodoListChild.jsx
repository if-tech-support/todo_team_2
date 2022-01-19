import React from 'react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Select

} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'



const TodoListChild = () => {
  return (
    <Table size='md'>
      <Tbody>
        <Tr>
          <Td fontSize='16px' fontWeight="bold">Github上に静的サイトをホスティングする</Td>
          <Td>
          <Button rounded="full" bg="green.50" size="lg" fontSize='12px'>NOT STARTED</Button>
          </Td>
          <Td>
            <Select borderColor="tomato" fontSize='16px'>
              <option>High</option>
              <option>Middle</option>
              <option>Low</option>
            </Select>
          </Td>
          <Td fontSize='14px'>2020-11-8 18:55</Td>
          <Td fontSize='14px'>2020-11-8 18:55</Td>
          <Td>
          <EditIcon w={18} h={18} me={5} />
          <DeleteIcon w={18} h={18}/>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default TodoListChild