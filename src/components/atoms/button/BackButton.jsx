import Router from 'next/router'
import { Button } from '@chakra-ui/react'

export default function BackButton() {
  const handleClickButton = () => {
    Router.push('/')
  }
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
      onClick={handleClickButton}
    >
      Back
    </Button>
  )
}
