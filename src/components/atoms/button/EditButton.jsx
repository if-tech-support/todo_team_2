import { Button } from '@chakra-ui/button'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { BiPencil } from 'react-icons/bi'

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
      rightIcon={<Icon as={BiPencil} />}
    >
      Edit
    </Button>
  )
}

export default EditButton
