import { Button } from '@chakra-ui/button'
import React from 'react'

const EditButton = () => {
  return (
    <Button
      backgroundColor="green.300"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      w="112px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'green.400' }}
    >
      Edit
    </Button>
  )
}

export default EditButton
