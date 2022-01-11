import { Input, Text } from '@chakra-ui/react'
import React from 'react'

const Title = () => {
  return (
    <>
      <Text fontSize="xl" fontWeight="700">
        TITLE
      </Text>
      <Input
        type="text"
        placeholder="Text"
        rounded={10}
        border="1px solid rgba(0,0,0,0.8)"
        py="32px"
        fontWeight="700"
      />
    </>
  )
}

export default Title
