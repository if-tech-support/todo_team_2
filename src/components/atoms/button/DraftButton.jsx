import { Button } from '@chakra-ui/button'
import React from 'react'

export const DraftButton = () => {
  return (
    <Button
      backgroundColor="pink.300"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      w="112px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'pink.400' }}
    >
      DRAFT
    </Button>
  )
}
