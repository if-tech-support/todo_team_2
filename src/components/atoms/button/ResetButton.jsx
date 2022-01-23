import { Button } from '@chakra-ui/button'
import React from 'react'

export const ResetButton = () => {
  return (
    <Button
      backgroundColor="gray.500"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      w="104px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'gray.600' }}
    >
      RESET
    </Button>
  )
}
