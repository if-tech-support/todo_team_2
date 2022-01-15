import React from 'react'
import { Select, FormControl, FormLabel } from '@chakra-ui/react'

const TodoListStatus = () => {
  return (
    <FormControl>
      <FormLabel htmlFor='status' fontSize='18px' fontWeight='bold'>
        STATUS
      </FormLabel>
      <Select id='status' placeholder='- - - - - - -' fontWeight='bold' width='192px' height='40px'>
        <option>NOT STARTED</option>
        <option>DOING</option>
        <option>DONE</option>
      </Select>
    </FormControl>
  )
}

export default TodoListStatus