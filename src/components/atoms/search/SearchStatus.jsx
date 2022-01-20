import React from 'react'
import { Select, FormControl, FormLabel } from '@chakra-ui/react'

const SearchStatus = () => {
  return (
    <FormControl>
      <FormLabel 
        htmlFor='status' 
        fontFamily='Gothic A1' 
        fontSize='18px' 
        fontWeight='700'
      >
        STATUS
      </FormLabel>
      <Select 
        id='status'
        placeholder='- - - - - - -' 
        fontWeight='bold' 
        width='192px' 
        height='40px'
        borderRadius='10px'
      >
        <option>NOT STARTED</option>
        <option>DOING</option>
        <option>DONE</option>
      </Select>
    </FormControl>
  )
}

export default SearchStatus