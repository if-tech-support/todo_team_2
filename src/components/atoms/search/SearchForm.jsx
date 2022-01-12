import React from 'react'
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm = () => {
  return (
    <>
      <Text fontSize="18px" fontWeight="700" fontFamily="Gothic A1" pb={2}>
        SEARCH
      </Text>
      <InputGroup>
        <Input
          placeholder="Text"
          border="1px solid rgba(0, 0, 0, 0.8)"
          size="md"
        />
        <InputRightElement
          children={<SearchIcon color="rgba(0, 0, 0, 0.2)" />}
        />
      </InputGroup>
    </>
  )
}

export default SearchForm
